const express = require("express");
const app = express();
const port = 5000;

app.get("/api/bears", (req, res) => {
  const bears = [
    {
      id: 1,
      name: "Kodiak bear",
      nameLatin: "Ursus arctos middendorffi",
      description:
        "The Kodiak bear (Ursus arctos middendorffi), also known as the Kodiak brown bear, sometimes the Alaskan brown bear, inhabits the islands of the Kodiak Archipelago in southwest Alaska",
      kingdom: "Animalia",
      image:
        "https://media.istockphoto.com/photos/bear-isolated-on-white-background-picture-id500565090?k=6&m=500565090&s=612x612&w=0&h=AYpiv8hOMO63fcBoitA-YrFM_V7pBNQKErxsZP-8KkM="
    },
    {
      id: 2,
      name: "Cinnamon bear",
      nameLatin: "Ursus americanus cinnamomum",
      description:
        "The cinnamon bear (Ursus americanus cinnamomum) is both a color phase and subspecies of the American black bear, native to central and western areas of the United States and Canada",
      kingdom: "Animalia",
      image:
        "https://media.istockphoto.com/photos/bear-isolated-on-white-background-picture-id500565090?k=6&m=500565090&s=612x612&w=0&h=AYpiv8hOMO63fcBoitA-YrFM_V7pBNQKErxsZP-8KkM="
    },
    {
      id: 3,
      name: "Grizzly bear",
      nameLatin: "Ursus arctos ssp.",
      description:
        "The grizzly bear (Ursus arctos ssp.) is a large population of the brown bear inhabiting North America. Scientists generally do not use the name grizzly bear but call it the North American brown bear.",
      kingdom: "Animalia",
      image:
        "https://media.istockphoto.com/photos/bear-isolated-on-white-background-picture-id500565090?k=6&m=500565090&s=612x612&w=0&h=AYpiv8hOMO63fcBoitA-YrFM_V7pBNQKErxsZP-8KkM="
    },
    {
      id: 4,
      name: "Glacier bear",
      nameLatin: "Ursus americanus emmonsii",
      description:
        "The glacier bear (Ursus americanus emmonsii), sometimes referred to as the blue bear, is a subspecies of American black bear with silver-blue or gray hair endemic to Southeast Alaska.",
      kingdom: "Animalia",
      image:
        "https://media.istockphoto.com/photos/bear-isolated-on-white-background-picture-id500565090?k=6&m=500565090&s=612x612&w=0&h=AYpiv8hOMO63fcBoitA-YrFM_V7pBNQKErxsZP-8KkM="
    },
    {
      id: 5,
      name: "Florida black bear",
      nameLatin: "Ursus americanus floridanus",
      description:
        "The Florida black bear (Ursus americanus floridanus) is a subspecies of the American black bear that has historically ranged throughout most of Florida and southern portions of Alabama, Georgia, and Mississippi.",
      kingdom: "Animalia",
      image:
        "https://media.istockphoto.com/photos/bear-isolated-on-white-background-picture-id500565090?k=6&m=500565090&s=612x612&w=0&h=AYpiv8hOMO63fcBoitA-YrFM_V7pBNQKErxsZP-8KkM="
    }
  ];
  res.json(bears);
});

app.listen(port, () => console.log(`Server started, port ${port}`));
