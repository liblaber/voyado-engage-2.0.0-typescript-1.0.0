import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.achievements.achievementsGetAllAchievements({
    offset: 8,
    count: 2,
  });

  console.log(data);
})();
