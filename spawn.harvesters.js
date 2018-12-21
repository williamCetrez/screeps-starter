var spawnHarvesters = {
  run: function () { 
      var newName = 'Harvester' + Game.time;
      console.log(`Spawning new harvester: ${newName}`);
      Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
        { memory: { role: 'harvester' } });
    }
  }

module.exports = spawnHarvesters;