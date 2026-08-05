export type ActorGroup = "NASA" | "ESA / Europe" | "China" | "India" | "Japan" | "Other public" | "Commercial";

export type MissionRecord = {
  id: number;
  actor: string;
  actorGroup: ActorGroup;
  mission: string;
  launch: string;
  year: string | null;
  month: string | null;
  type: string;
  destination: string;
  status: string;
  description: string;
  partners: string | null;
};

type MissionTuple = [number, string, ActorGroup, string, string, string | null, string | null, string, string, string, string, string | null];

const missionRows: MissionTuple[] = [
  [1,"USA / NASA","NASA","Artemis II","Apr 2026","2026","Apr","Human Spaceflight","Moon Flyby","Active","4 astronauts fly around the Moon; no landing. First crewed Artemis — 10-day mission.","CSA, ESA, JAXA"],
  [2,"USA / NASA","NASA","Artemis III","Mid-2027","2027",null,"Human Spaceflight","Moon South Pole","Planned","First crewed lunar landing since Apollo 17; SpaceX Starship HLS.","SpaceX"],
  [3,"USA / NASA","NASA","Artemis IV","2028","2028",null,"Human Spaceflight","Moon / Gateway","Planned","First mission docking with Gateway lunar space station; crew of 4.","Int'l partners"],
  [4,"USA / NASA","NASA","Nancy Grace Roman ST","Late 2026","2026",null,"Space Telescope","L2 Orbit","Planned","Wide-field infrared telescope; dark energy, exoplanets, microlensing surveys.",null],
  [5,"USA / NASA","NASA","ESCAPADE","2026","2026",null,"Planetary Science","Mars Orbit","Planned","Twin CubeSats studying Mars magnetosphere and solar wind interaction.",null],
  [6,"USA / NASA","NASA","SunRISE","Mid-2026","2026",null,"Heliophysics","Earth Orbit","Planned","Six CubeSats forming radio array studying solar energetic particles.",null],
  [7,"USA / NASA","NASA","Aspera","Aug 2026","2026","Aug","Astrophysics","Earth Orbit","Planned","Small UV telescope mapping hot gas in circumgalactic medium.",null],
  [8,"USA / NASA","NASA","Pandora","Jan 2026","2026","Jan","Astrophysics","Earth Orbit","Launched","Small space telescope studying exoplanet atmospheres. Launched Jan 11, 2026.",null],
  [9,"USA / NASA","NASA","Dragonfly","Jul 2028","2028","Jul","Planetary Science","Saturn / Titan","Planned","Nuclear-powered rotorcraft lander exploring Titan's prebiotic chemistry.",null],
  [10,"USA / NASA","NASA","NEO Surveyor","2028","2028",null,"Planetary Defense","Earth-Sun L1","Planned","Infrared telescope to detect 90% of near-Earth asteroids ≥140m.",null],
  [11,"USA / NASA","NASA","DAVINCI","2030","2030",null,"Planetary Science","Venus","Planned","Descent probe through Venus atmosphere; composition and surface geology.",null],
  [12,"USA / NASA","NASA","VERITAS","2031","2031",null,"Planetary Science","Venus","Planned","Venus surface radar mapper; topography and geology.",null],
  [13,"USA / NASA","NASA","Mars Sample Return","2033","2033",null,"Sample Return","Mars","Planned","Joint NASA/ESA return of Perseverance samples to Earth.","ESA"],
  [14,"USA / NASA","NASA","Europa Clipper","2030 (arr.)","2030",null,"Planetary Science","Jupiter / Europa","En Route","Orbiter studying Europa for habitability and subsurface ocean.",null],
  [15,"ESA / Europe","ESA / Europe","PLATO","Dec 2026","2026","Dec","Space Telescope","L2 Orbit","Planned","26-camera array monitoring 200,000 stars; hunting rocky exoplanets in habitable zones.",null],
  [16,"ESA / Europe","ESA / Europe","BepiColombo","Late 2026 (arr.)","2026",null,"Planetary Science","Mercury","En Route","Joint ESA-JAXA mission; Mercury orbit insertion after 2018 launch.","JAXA"],
  [17,"ESA / Europe","ESA / Europe","Hera","Nov 2026 (arr.)","2026","Nov","Planetary Defense","Asteroid Didymos","En Route","Studying DART asteroid impact crater at Didymos system.",null],
  [18,"ESA / Europe","ESA / Europe","ClearSpace-1","2026","2026",null,"Space Debris Removal","Earth Orbit","Planned","First-ever active debris removal; deorbiting defunct PROBA-1 satellite.",null],
  [19,"ESA / Europe","ESA / Europe","Lunar Pathfinder","2026","2026",null,"Lunar Comms","Moon Orbit","Planned","First commercial lunar relay satellite; lunar connectivity and navigation.","Surrey Satellite"],
  [20,"ESA / Europe","ESA / Europe","FLEX + Sentinel-3C","Sep 2026","2026","Sep","Earth Observation","Earth Orbit","Planned","Vegetation fluorescence and oceanography on a single Vega-C launch.","EU Copernicus"],
  [21,"ESA / Europe","ESA / Europe","SMILE","Apr 2026","2026","Apr","Heliophysics","Earth Orbit","Planned","Joint ESA-CAS mission; solar wind interaction with magnetosphere.","China (CAS)"],
  [22,"ESA / Europe","ESA / Europe","ALTIUS","2026","2026",null,"Earth Observation","Earth Orbit","Planned","Stratospheric ozone monitoring satellite.",null],
  [23,"ESA / Europe","ESA / Europe","ExoMars Rosalind Franklin","2028","2028",null,"Planetary Science","Mars","Planned","Rover searching for biosignatures and signs of past or present life on Mars.",null],
  [24,"ESA / Europe","ESA / Europe","Ramses","Apr 2028","2028","Apr","Planetary Defense","Asteroid Apophis","Planned","Mission to study Apophis before its 2029 Earth close flyby.",null],
  [25,"ESA / Europe","ESA / Europe","Comet Interceptor","2029","2029",null,"Planetary Science","Long-Period Comet","Planned","Flyby of a pristine comet on its first-ever approach to the Sun.","JAXA"],
  [26,"ESA / Europe","ESA / Europe","ARIEL","2031","2031",null,"Space Telescope","L2 Orbit","Planned","Atmospheric characterisation of 1,000+ known exoplanets.",null],
  [27,"ESA / Europe","ESA / Europe","EnVision","2031","2031",null,"Planetary Science","Venus","Planned","Venus orbiter mapping surface, atmosphere, and interior.",null],
  [28,"ESA / Europe","ESA / Europe","JUICE (orbital ins.)","2031 (arr.)","2031",null,"Planetary Science","Jupiter / Ganymede","En Route","Jupiter Icy Moons Explorer; Ganymede orbit insertion 2034.",null],
  [29,"China / CNSA","China","Chang'e 7","Aug 2026","2026","Aug","Lunar Exploration","Moon South Pole","Planned","Orbiter, lander, rover, and hopper surveying south-pole water ice and resources.",null],
  [30,"China / CNSA","China","Tianwen-2","Jun 2026","2026","Jun","Asteroid Sample Return","Kamo'oalewa (NEA)","Planned","Orbit insertion June 2026; sample collection then Main Belt comet visit.",null],
  [31,"China / CNSA","China","Xuntian","Late 2026","2026",null,"Space Telescope","CSS Co-Orbit","Planned","First large Chinese astrophysics flagship telescope; approximately 2m aperture.",null],
  [32,"China / CNSA","China","VOICE","2026","2026",null,"Planetary Science","Venus","Planned","Venus Volcano Imaging and Climate Explorer; arrives at Venus in 2027.",null],
  [33,"China / CNSA","China","Planetary Defense Demo","Dec 2027","2027","Dec","Planetary Defense","Asteroid 2016 WP8","Planned","Kinetic impactor and observer pair; first Chinese planetary defense mission.",null],
  [34,"China / CNSA","China","Chang'e 8","2028","2028",null,"Lunar Exploration","Moon South Pole","Planned","ISRU technology tests; site preparation for an ILRS lunar base.","Russia"],
  [35,"China / CNSA","China","Tianwen-3","2030","2030",null,"Sample Return","Mars","Planned","Mars sample collection and return to Earth.",null],
  [36,"China / CNSA","China","Crewed Moon Landing","~2030","2030",null,"Human Spaceflight","Moon","Planned","First crewed Chinese lunar landing; Mengzhou and Lanyue lander.",null],
  [37,"China / CNSA","China","ILRS Moon Base Phase 1","2030s","2030",null,"Lunar Infrastructure","Moon South Pole","Planned","International Lunar Research Station with Russia; uncrewed operations first.","Russia + partners"],
  [38,"India / ISRO","India","Gaganyaan G1 (Uncrewed)","H2 2026","2026",null,"Human Spaceflight (Test)","LEO","Planned","First uncrewed orbital Gaganyaan test; carries humanoid robot Vyomitra.",null],
  [39,"India / ISRO","India","Gaganyaan G2 (Uncrewed)","Late 2026","2026",null,"Human Spaceflight (Test)","LEO","Planned","Second uncrewed test; validates life support and abort systems.",null],
  [40,"India / ISRO","India","LUPEX Rover","2026","2026",null,"Lunar Exploration","Moon South Pole","Planned","Joint India-Japan rover; drills for water ice at the lunar south pole.","JAXA"],
  [41,"India / ISRO","India","Gaganyaan H1 (Crewed)","Q1 2027","2027",null,"Human Spaceflight","LEO","Planned","First crewed Indian spaceflight; two to three astronauts, seven-day mission.",null],
  [42,"India / ISRO","India","Chandrayaan-4","2027–28","2027",null,"Lunar Sample Return","Moon South Pole","Planned","Five-module mission to collect and return samples from the south pole.",null],
  [43,"India / ISRO","India","Shukrayaan-1","2028","2028",null,"Planetary Science","Venus","Planned","India's first Venus orbiter; atmosphere, surface, and geology instruments.",null],
  [44,"India / ISRO","India","Bhartiya Antariksh Station M1","2028","2028",null,"Space Station","LEO","Planned","First module of India's planned five-module space station.",null],
  [45,"India / ISRO","India","Mangalyaan-2","~2030","2030",null,"Planetary Science","Mars","Planned","Mars orbiter and lander; second Indian Mars mission.",null],
  [46,"India / ISRO","India","NISAR","Jul 2025","2025","Jul","Earth Observation","Earth Orbit","Launched","Joint NASA-ISRO SAR satellite; all-weather Earth imaging. Launched July 2025.","NASA"],
  [47,"Japan / JAXA","Japan","MMX (Martian Moons Exp.)","Late 2026","2026",null,"Sample Return","Mars / Phobos","Planned","Phobos sample collection; return to Earth in 2031. Also studies Deimos.","CNES, DLR"],
  [48,"Japan / JAXA","Japan","Hayabusa2 Extended","Jul 2026 (flyby)","2026","Jul","Asteroid Flyby","Asteroid Torifune","Planned","Extended Hayabusa2 mission flyby of asteroid Torifune.",null],
  [49,"Japan / JAXA","Japan","LUPEX","2026","2026",null,"Lunar Exploration","Moon South Pole","Planned","Joint Japan-India south-pole water-ice rover mission.","ISRO"],
  [50,"Japan / JAXA","Japan","BepiColombo","Late 2026 (arr.)","2026",null,"Planetary Science","Mercury","En Route","Mercury Magnetospheric Orbiter separating at Mercury arrival.","ESA"],
  [51,"Japan / ispace","Commercial","RESILIENCE Lander M2","Jun 2026","2026","Jun","Lunar Lander","Moon","Planned","Mission 2 landing attempt June 5, 2026; carries UAE Rashid Rover 2.","UAE"],
  [52,"Japan / JAXA","Japan","Comet Interceptor","2029","2029",null,"Planetary Science","Long-Period Comet","Planned","Co-developed with ESA for a pristine-comet flyby.","ESA"],
  [53,"Russia / Roscosmos","Other public","Luna-26","2028","2028",null,"Lunar Orbiter","Moon Orbit","Planned","Maps lunar topography and water-ice distribution; serves as a communications relay.",null],
  [54,"Russia / Roscosmos","Other public","Luna-27","~2030","2030",null,"Lunar Lander","Moon Poles","Planned","Twin landers to the north and south poles; water-ice search.","ESA instruments"],
  [55,"Russia / Roscosmos","Other public","Mars Sample Return","2031+","2031",null,"Sample Return","Mars","Planned","Russia's independent Mars sample-return mission.",null],
  [56,"UAE / MBRSC","Other public","EMA Asteroid Mission","2028","2028",null,"Planetary Science","Venus + Asteroids","Planned","Venus flyby, then exploration of up to seven Main Belt asteroids through 2033.",null],
  [57,"UAE / MBRSC","Other public","Rashid Rover 2","2026","2026",null,"Lunar Rover","Moon","Planned","Second UAE lunar rover aboard the ispace RESILIENCE lander.","ispace Japan"],
  [58,"South Korea / KASA","Other public","Danuri (operations)","Ongoing",null,null,"Lunar Orbiter","Moon Orbit","Active","Korea Pathfinder Lunar Orbiter; mapping the Moon since its 2022 launch.","NASA"],
  [59,"South Korea / KASA","Other public","Korea Moon Lander","2032","2032",null,"Lunar Lander","Moon","Planned","First Korean lunar lander; $500M+ annual space investment approved.",null],
  [60,"SpaceX","Commercial","Starship Mars (uncrewed)","~2026–27","2026",null,"Planetary Science","Mars","Planned","First Starship uncrewed test to Mars; precursor to crewed missions.",null],
  [61,"SpaceX","Commercial","Haven-1 (Vast)","Early 2027","2027",null,"Commercial Space Station","LEO","Planned","First standalone commercial space station; launched on Falcon 9 for Vast.","Vast Space"],
  [62,"Blue Origin","Commercial","Blue Moon Mk1 Pathfinder","Q1 2026","2026",null,"Lunar Lander","Moon","Planned","Uncrewed Blue Moon pathfinder mission on New Glenn rocket.","NASA CLPS"],
  [63,"Blue Origin","Commercial","Blue Moon (Crewed)","2028+","2028",null,"Human Spaceflight","Moon","Planned","Human-rated lunar lander competing alongside SpaceX HLS for Artemis.","NASA"],
  [64,"Virgin Galactic","Commercial","Delta Class Flights","Late 2026","2026",null,"Space Tourism","Suborbital","Planned","Research spaceflight summer 2026; private astronaut flights fall 2026.",null],
  [65,"Sierra Space","Commercial","Dream Chaser Demo-1","Late 2026","2026",null,"Cargo Spaceplane","ISS / LEO","Planned","First orbital flight of a reusable spaceplane; ISS cargo resupply under NASA contract.","NASA"],
  [66,"Rocket Lab","Commercial","Neutron Rocket","Late 2026","2026",null,"Launch Vehicle","LEO","Planned","Inaugural flight of a medium-lift reusable rocket; competes with Falcon 9.",null],
  [67,"Axiom Space","Commercial","Axiom Station Module 1","2026","2026",null,"Commercial Space Station","ISS / LEO","Planned","First Axiom module attaches to ISS; later detaches as a standalone station.","NASA"],
  [68,"Relativity Space","Commercial","Terran R","Late 2026","2026",null,"Launch Vehicle","LEO","Planned","First flight of a 3D-printed reusable medium-heavy-lift rocket.",null],
  [69,"Stoke Space","Commercial","Nova Rocket","2026","2026",null,"Launch Vehicle","LEO","Planned","Fully reusable rocket with both stages designed for recovery.",null],
  [70,"Firefly Aerospace","Commercial","Blue Ghost M2","Late 2026","2026",null,"Lunar Lander","Moon","Planned","Second Firefly lunar lander under NASA's CLPS program.","NASA CLPS"],
  [71,"Intuitive Machines","Commercial","IM-3","2026","2026",null,"Lunar Lander","Moon South Pole","Planned","Third Intuitive Machines CLPS lunar lander to the south-pole region.","NASA CLPS"],
  [72,"Voyager / Airbus","Commercial","Starlab Station","2028","2028",null,"Commercial Space Station","LEO","Planned","Four-astronaut private station designed to replace ISS; single launch on Starship.","Airbus, NASA"],
];

export const missionRecords: MissionRecord[] = missionRows.map(([id, actor, actorGroup, mission, launch, year, month, type, destination, status, description, partners]) => ({
  id, actor, actorGroup, mission, launch, year, month, type, destination, status, description, partners,
}));

export const actorGroups: Array<ActorGroup | "All actors"> = ["All actors", "NASA", "ESA / Europe", "China", "India", "Japan", "Other public", "Commercial"];
export const missionYears = ["2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "Unscheduled"];
export const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Unspecified"];
