var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var towerSystem = require('tower.system');
var spawnHarvesters = require('spawn.harvesters');

const runCreeps = () => {
  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == 'builder') {
      roleBuilder.run(creep);
    }
  }
}

const runTower = () => {
  const tower = Game.getObjectById('351192aa80bc7d37bd05136a');
  if (tower) {
    towerSystem;
  }
}

module.exports.loop = function () {

  const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  const builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

  for (var name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }

  console.log('mum')

  // if (harvesters.length < 1) {
  //   spawnHarvesters.run();
  // }
  // if (upgraders.length < 1) {
  //   var newName = 'Upgrader' + Game.time;
  //   console.log(`Spawning new Upgrader: ${newName}`);
  //   Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
  //     { memory: { role: 'upgrader' } });
  // }
  // if (builders.length < 1) {
  //   var newName = 'Builder' + Game.time;
  //   console.log(`Spawning new Builder: ${newName}`);
  //   Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName,
  //     { memory: { role: 'builder' } });
  // }
    if (Game.spawns['Spawn1'].spawning) {
      const spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
        '🛠️' + spawningCreep.memory.role,
        Game.spawns['Spawn1'].pos.x + 1,
        Game.spawns['Spawn1'].pos.y,
        { align: 'left', opacity: 0.8 });
    }
  
    runCreeps()
    runTower()
}
