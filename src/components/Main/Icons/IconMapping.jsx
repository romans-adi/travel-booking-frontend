import {
  faMountain, faGlobe, faSun, faBuilding, faTree, faCity, faMountainSun, faPersonHiking, faMosquito,
  faChampagneGlasses, faBicycle, faFire, faUmbrellaBeach, faCaravan, faTowerObservation, faHippo,
  faSnowflake, faPersonSkiing, faMonument, faLandmarkDome, faPersonBiking,
} from '@fortawesome/free-solid-svg-icons';

const iconMappings = {
  cultural: [faGlobe, faMonument, faPersonBiking],
  beach: [faBuilding, faChampagneGlasses, faUmbrellaBeach],
  history: [faSun, faMonument, faLandmarkDome],
  skiing: [faMountain, faSnowflake, faPersonSkiing],
  safari: [faHippo, faTowerObservation, faCaravan],
  mountain: [faMountain, faMountainSun, faPersonHiking],
  rainforest: [faTree, faMosquito, faPersonHiking],
  city: [faCity, faChampagneGlasses, faBicycle],
  desert: [faSun, faPersonHiking, faFire],
};

export default iconMappings;
