import { VoyadoEngage } from 'voyado_engage';

(async () => {
  const voyadoEngage = new VoyadoEngage({
    token: 'YOUR_TOKEN',
  });

  const { data } = await voyadoEngage.achievements.achievementsGetAllAchievements({
    offset: 9,
    count: 8,
  });

  console.log(data);
})();
