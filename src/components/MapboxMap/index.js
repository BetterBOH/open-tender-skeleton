import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import cx from 'classnames';
import get from 'utils/get';

class MapboxMap extends Component {
  static propTypes = {
    mapboxApiKey: PropTypes.string.isRequired,
    featureCollection: PropTypes.shape({
      type: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    iconSize: PropTypes.number,
    cluster: PropTypes.bool,
    clusterMaxZoom: PropTypes.number,
    clusterRadius: PropTypes.number,
    textSize: PropTypes.number,
    textColor: PropTypes.string,
    mapPadding: PropTypes.number,
    onClickFeature: PropTypes.func,
    defaultIcon: PropTypes.string.isRequired,
    mapboxStyleUrl: PropTypes.string.isRequired,
    collections: PropTypes.arrayOf(PropTypes.object),
    hoverFade: PropTypes.bool,
    className: PropTypes.string,
    onLoad: PropTypes.func,
    maxZoom: PropTypes.number,
    zoomToFeatureSpeed: PropTypes.number,
    initialZoom: PropTypes.number,
    initialCenter: PropTypes.array
  };

  static defaultProps = {
    apiKey: null,
    featureCollection: {
      type: 'FeatureCollection',
      features: []
    },
    iconSize: 1,
    cluster: false,
    clusterMaxZoom: null,
    clusterRadius: null,
    textSize: 12,
    textColor: '#000000',
    mapPadding: 100,
    onLoad: () => {},
    onClickFeature: () => {},
    defaultIcon: 'star',
    mapboxStyleUrl: 'mapbox://styles/mapbox/streets-v9',
    collections: [],
    hoverFade: false,
    className: undefined,
    maxZoom: null,
    zoomToFeatureSpeed: 1,
    initialZoom: 6,
    initialCenter: [-73.949997, 40.650002]
  };

  state = {
    mapId: uuid(),
    map: null,
    source: null,
    cluster: null,
    layer: null,
    bounds: null,
    loaded: false
  };

  async componentDidMount() {
    await this.initializeMap();
    this.addSource();
    this.addLayers();
    if (this.props.collections.length) {
      this.setMapProperties();
    }
    this.bindEventListeners();
    await this.setBounds();
    this.zoomToBounds();
    this.props.onLoad();
    this.setState({
      loaded: true
    });
  }

  async componentDidUpdate(prevProps) {
    if (!this.state.loaded) return;

    if (prevProps.collections !== this.props.collections) {
      this.setMapProperties();
      if (prevProps.featureIdZoomTo === this.props.featureIdZoomTo) {
        await this.setBounds();

        if (
          this.props.featureIdZoomTo === undefined ||
          this.props.featureIdZoomTo === null
        ) {
          this.zoomToBounds();
        } else {
          const feature = this.featureFromId(this.props.featureIdZoomTo);
          this.zoomToFeature(feature);
        }
      }
    }

    if (prevProps.featureIdZoomTo !== this.props.featureIdZoomTo) {
      await this.setBounds();
      if (this.props.featureIdZoomTo === null) {
        this.zoomToBounds();
      } else {
        const feature = this.featureFromId(this.props.featureIdZoomTo);
        if (feature) this.zoomToFeature(feature);
      }
    }

    if (prevProps.onClickFeature !== this.props.onClickFeature) {
      this.unbindClickListeners();
      this.bindClickListeners();
    }
  }

  componentWillUnmount() {
    if (this.state.map) this.state.map.remove();
  }

  initializeMap() {
    return new Promise(resolve => {
      const {
        mapboxStyleUrl,
        maxZoom,
        initialCenter,
        initialZoom,
        mapboxApiKey
      } = this.props;

      mapboxgl.accessToken = mapboxApiKey;
      const map = new mapboxgl.Map({
        container: this.state.mapId,
        style: mapboxStyleUrl,
        zoom: initialZoom,
        center: initialCenter,
        maxZoom
      });
      map.on('load', () => {
        map.resize();
        this.setState({ map }, () => resolve(map));
      });
    });
  }

  addSource() {
    const { map } = this.state;
    const {
      featureCollection,
      cluster,
      clusterMaxZoom,
      clusterRadius
    } = this.props;

    const source = cluster
      ? map.addSource('source', {
          type: 'geojson',
          data: featureCollection,
          cluster,
          clusterMaxZoom,
          clusterRadius
        })
      : map.addSource('source', {
          type: 'geojson',
          data: featureCollection
        });

    this.setState({ source });
  }

  addLayers() {
    const { defaultIcon, iconSize, textSize, textColor } = this.props;
    const layer = this.state.map.addLayer({
      id: 'layer',
      type: 'symbol',
      source: 'source',
      layout: {
        'text-font': ['Open Sans Bold'],
        'text-size': textSize,
        'icon-image': defaultIcon,
        'icon-size': iconSize
      },
      paint: {
        'icon-opacity': ['match', ['get', 'id'], '', 0.5, 1]
      }
    });

    const cluster = this.props.cluster
      ? this.state.map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'source',
          layout: {
            'text-field': [
              'step',
              ['zoom'],
              [
                'case',
                ['has', 'point_count'],
                ['to-string', ['get', 'point_count_abbreviated']],
                '1'
              ],
              12,
              [
                'case',
                ['has', 'point_count'],
                ['to-string', ['get', 'point_count_abbreviated']],
                ''
              ]
            ],
            'text-font': ['Open Sans Bold'],
            'text-size': textSize,
            'text-ignore-placement': true
          },
          paint: {
            'text-color': textColor
          }
        })
      : null;

    this.setState({ layer, cluster });
  }

  setMapProperties() {
    this.setIconImageProperty();

    if (this.props.cluster) {
      this.setMapData();
    } else {
      this.setVisibilityProperty();
    }
  }

  setIconImageProperty() {
    const { defaultIcon } = this.props;

    this.state.map.setLayoutProperty('layer', 'icon-image', [
      'match',
      ['get', 'id'],
      ...this.featuresWithoutDefaultIcon(),
      defaultIcon
    ]);
  }

  setMapData() {
    const { showFilteredOutLocationOnMap, featureCollection } = this.props;
    const hiddenFeatures = this.featuresNotVisible();

    const getFilteredFeatures = hiddenFeatures.length
      ? featureCollection.features.filter(feature => {
          const { id } = feature.properties;
          return !hiddenFeatures.includes(id);
        })
      : [];

    const filteredFeatures = showFilteredOutLocationOnMap
      ? featureCollection.features
      : getFilteredFeatures;

    const filteredGeoJSON = {
      type: 'FeatureCollection',
      features: filteredFeatures
    };

    this.state.map.getSource('source').setData(filteredGeoJSON);
  }

  setVisibilityProperty() {
    this.state.map.setFilter('layer', [
      '!in',
      'id',
      ...this.featuresNotVisible()
    ]);
  }

  setFeatureHoverOpacityProperty(featureId, opacity) {
    this.state.map.setPaintProperty('layer', 'icon-opacity', [
      'match',
      ['get', 'id'],
      featureId,
      opacity,
      1
    ]);
  }

  featuresWithoutDefaultIcon() {
    const { collections } = this.props;
    return collections
      .filter(collection => collection.icon)
      .reduce((agg, collection) => {
        const featureIds = this.featureIdsFromCollectionFilter(collection);
        return agg.concat(featureIds, collection.icon);
      }, []);
  }

  featuresNotVisible() {
    const { collections } = this.props;

    return collections
      .filter(collection => {
        return typeof collection.visible === 'boolean' && !collection.visible;
      })
      .reduce((agg, collection) => {
        const featureIds = this.featureIdsFromCollectionFilter(collection);
        return agg.concat(...featureIds);
      }, []);
  }

  featureIdsFromCollectionFilter(collection) {
    const {
      featureCollection: { features }
    } = this.props;
    let featureIds;
    // If collection has featureIds, add return sanitized ids directly from
    // array.
    if (collection.filter.ids && collection.filter.ids.length) {
      // Translates null values to empty strings, as mapbox does not except null
      // values in expressions.
      featureIds = [collection.filter.ids.map(id => (id === null ? '' : id))];

      // If a collection is provided an empty array of featureIds provide an
      // empty array with a string
    } else if (collection.filter.ids && !collection.filter.ids.length) {
      featureIds = [['']];

      // If collection has key and value, look up feature ids by those keys
      // and values.
    } else if (collection.filter.key && collection.filter.value) {
      featureIds = [
        features
          .filter(feature => {
            return (
              feature.properties[collection.filter.key] ===
              collection.filter.value
            );
          })
          .map(feature => feature.properties.id)
      ];

      // If collection has only key, look up features that have that key.
    } else if (collection.filter.key) {
      featureIds = [
        features
          .filter(feature => {
            return feature.properties[collection.filter.key];
          })
          .map(feature => feature.properties.id)
      ];

      // Else, throw error.
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'A collection must include an array of featureIds or a findBy key.'
        );
      }
    }

    return featureIds;
  }

  bindEventListeners() {
    this.bindClickListeners();
    this.bindMouseListeners();
  }

  handleFeatureClick = e => {
    const { onClickFeature } = this.props;
    const { map } = this.state;
    if (e.features[0].properties.cluster) {
      const clusterId = e.features[0].properties.cluster_id;
      map
        .getSource('source')
        .getClusterExpansionZoom(clusterId, (error, zoom) => {
          if (error) return null;

          map.easeTo({
            center: e.lngLat,
            zoom
          });
        });
    } else {
      onClickFeature(e.features[0]);
    }
  };

  bindClickListeners() {
    const { map } = this.state;
    map.on('click', 'layer', this.handleFeatureClick);
  }

  unbindClickListeners() {
    const { map } = this.state;
    map.off('click', 'layer', this.handleFeatureClick);
  }

  bindMouseListeners() {
    const { hoverFade } = this.props;
    const { map } = this.state;
    map.on('mouseenter', 'layer', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    if (hoverFade) {
      map.on('mousemove', 'layer', e => {
        this.setFeatureHoverOpacityProperty(e.features[0].properties.id, 0.7);
      });
    }
    map.on('mouseleave', 'layer', () => {
      map.getCanvas().style.cursor = '';
      if (hoverFade) {
        this.setFeatureHoverOpacityProperty('', 0.7);
      }
    });
  }

  setBounds() {
    return new Promise(resolve => {
      const { featureCollection } = this.props;
      const featuresNotVisible = this.featuresNotVisible();

      const visibleFeatureCoordinates = featureCollection.features
        .filter(feature => !featuresNotVisible.includes(feature.properties.id))
        .map(feature => feature.geometry.coordinates);

      const boundaryCoordinates = visibleFeatureCoordinates.length
        ? visibleFeatureCoordinates
        : featureCollection.features.map(feature => {
            return feature.geometry.coordinates;
          });

      const bounds = boundaryCoordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(boundaryCoordinates[0], boundaryCoordinates[0]));
      this.setState({ bounds }, () => resolve());
    });
  }

  zoomToBounds = () => {
    const { featureCollection } = this.props;

    if (!get(featureCollection, 'features', []).length) return null;

    return this.state.map.fitBounds(this.state.bounds, {
      padding: this.props.mapPadding
    });
  };

  zoomToFeature(feature) {
    const { zoomToFeatureSpeed } = this.props;
    this.state.map.flyTo({
      zoom: this.props.maxZoom,
      speed: zoomToFeatureSpeed,
      center: feature.geometry.coordinates
    });
  }

  featureFromId(id) {
    const {
      featureCollection: { features }
    } = this.props;
    return features.find(feature => feature.properties.id === id);
  }

  render() {
    const { className } = this.props;
    const { mapId } = this.state;

    const classes = cx('w100 h100', { [className]: className });

    return <figure id={mapId} className={classes} />;
  }
}

export default MapboxMap;
