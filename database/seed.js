const { db, Forecast } = require("./index");

const runSeed = async () => {
  await db.sync({ force: true });

  const forecasts = await Forecast.bulkCreate([
    {
      temperature: 29.1,
      time: Date.now(),
      description: "sunnu with a balmy termerature",
    },
    {
      temperature: 22.4,
      time: Date.now(),
      description: "a little chilly, bring a jacket",
    },
    {
      temperature: 2.4,
      time: Date.now(),
      description: "not quite freezeing, but bring a thick coat",
    },
  ]);

  console.log(`🌤️ Created ${forecasts.length} forecasts`);

  await db.close();
};

runSeed();
