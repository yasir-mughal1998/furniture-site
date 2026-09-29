/**
 * All imagery is referenced by Unsplash photo id. To use your own photos,
 * place files in /public/images and replace the value with a local path
 * such as "/images/walnut-dining.jpg".
 */
export function img(id: string) {
  if (id.startsWith("/")) return id;
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`;
}

export const images = {
  hero: "1618221195710-dd6b41faaea6",
  livingWalnut: "1616486338812-3dadae4b4ace",
  livingOak: "1600210492486-724fe5c67fb0",
  livingSand: "1616594039964-ae9021a400a0",
  bedPlatform: "1617325247661-675ab4b64ae2",
  diningGarden: "1604578762246-41134e37f9cc",
  diningHeritage: "1615066390971-03e4e1c36ddf",
  sofaLeather: "1540574163026-643ea20ade25",
  chairSaddle: "1572297794908-f2ee5a2930d6",
  chairLounge: "1598300042247-d088f8ab3a91",
  wardrobe: "1558997519-83ea9252edf8",
  sideTable: "1611486212557-88be5ff6f941",
  writingDesk: "1611269154421-4e27233ac5c7",
  wallDesk: "1597072689227-8882273e8f6a",
  kitchenBar: "1622372738946-62e02505feb3",
  shelving: "1594026112284-02bb6f3352fe",
  restaurantDark: "1517248135467-4c7edcad34c4",
  restaurantTerrace: "1559339352-11d035aa65de",
  restaurantDining: "1414235077428-338989a2e8c0",
  officeOpen: "1497366811353-6870744d04b2",
  officeLounge: "1524758631624-e2822e304c36",
  hotelSuite: "1631049307264-da0ec9d70304",
  hotelRoom: "1582719478250-c89cae4dc85b",
  toolWall: "1426927308491-6380b6a9936f",
  toolsHanging: "1530124566582-a618bc2615dc",
  toolsOnOak: "1567361808960-dec9cb578182",
  toolsBench: "1508873535684-277a3cbcc4e8",
  mitreSaw: "1601058268499-e52658b8bb88",
  craftsmanCutting: "1505798577917-a65157d3320a",
  hammerOak: "1586864387967-d02ef85d93e8",
  drillSawdust: "1504148455328-c376907d081c",
  teamFounder: "1472099645785-5658abf4ff4e",
  teamJoiner: "1506794778202-cad84cf45f1d",
  teamFinisher: "1507003211169-0a1dd7228f2d",
  teamUpholstery: "1500648767791-00dcc994a43e",
  teamProduction: "1531427186611-ecfd6d936c79",
} as const;
