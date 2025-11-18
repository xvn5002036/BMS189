class MapleMap {
/**
     * @出自类 MapleMap
*/
getNumPlayersItemsInArea(index: number){}
/**
     * @出自类 MapleMap
*/
setFieldLimit(fieldLimit: number){}
/**
     * @出自类 MapleMap
*/
talkMonster(msg: String, itemId: number, objectid: number){}
/**
     * @出自类 MapleMap
*/
getNumSpawnPoints(){}
/**
     * @出自类 MapleMap
*/
setOnUserEnter(onUserEnter: String){}
/**
     * 用于某些特殊地图里，刷怪点随着进度而变化
     * 


     * 如：黑色天堂Act1，奥尔卡的内心世界

     *

     * @param status 状态
     * @出自类 MapleMap
     */
modifySpawnPoint4Event(status: number){}
/**
     * @出自类 MapleMap
*/
spawnSummon(summon: any, action: number){}
/**
     * @出自类 MapleMap
*/
spawnMonster(monster: Monster, spawnType: number){}
/**
     * @出自类 MapleMap
*/
getSpawnedMonstersOnMap(){}
/**
     * @出自类 MapleMap
*/
getCharactersIntersect(box: any){}
/**
     * @出自类 MapleMap
*/
broadcastGMMessage(source: Character, packet: any, repeatToSource: number){}
/**
     * @出自类 MapleMap
*/
spawnMist(mapMist: any, duration: number){}
/**
     * @出自类 MapleMap
*/
黑魔法师_红陨星(){}
/**
     * @出自类 MapleMap
*/
getAllUniqueMonsters(){}
/**
     * @出自类 MapleMap
*/
spawnExtractor(ex: any){}
/**
     * @出自类 MapleMap
*/
setLeft(left: number){}
/**
     * @出自类 MapleMap
*/
removePlayer(chr: Character){}
/**
     * @出自类 MapleMap
*/
spawnMonsterOnGroundBelow(mob: Monster, pos: any, spawnType: number){}
/**
     * @出自类 MapleMap
*/
getRunningOid(){}
/**
     * @出自类 MapleMap
*/
getCurrentPartyId(){}
/**
     * @出自类 MapleMap
*/
getPlatforms(){}
/**
     * @出自类 MapleMap
*/
spawnRandomDrops(chr: Character, id: number, count: number){}
/**
     * @出自类 MapleMap
*/
set精英首领怪出没(精英首领怪出没: number){}
/**
     * @param ids 所有要检查的怪物的ID

     * @return 指定ID的怪物的数量
     * @出自类 MapleMap
     */
countMonsterById(ids: number){}
/**
     * @出自类 MapleMap
*/
getMapId(){}
/**
     * @出自类 MapleMap
*/
setConsumeItemCoolTime(consumeItemCoolTime: number){}
/**
     * @出自类 MapleMap
*/
getBurningArea(){}
/**
     * @出自类 MapleMap
*/
getMobsSize(){}
/**
     * @出自类 MapleMap
*/
getCharactersThreadsafe(){}
/**
     * @出自类 MapleMap
*/
spawnRune(rune: any){}
/**
     * @出自类 MapleMap
*/
setLastSpawnTime(lastSpawnTime: number){}
/**
     * @出自类 MapleMap
*/
startMapEffect(msg: String, itemId: number){}
/**
     * @出自类 MapleMap
*/
set禁止所有掉落(禁止所有掉落: number){}
/**
     * @出自类 MapleMap
*/
run(){}
/**
     * @出自类 MapleMap
*/
spawnFamiliar(familiar: any){}
/**
     * @出自类 MapleMap
*/
killMonster(monsId: number, animate: number, onlyKillOne: number){}
/**
     * @出自类 MapleMap
*/
getItemsInRange(from: any, rangeSq: number){}
/**
     * @出自类 MapleMap
*/
setRight(right: number){}
/**
     * @出自类 MapleMap
*/
getPortals(){}
/**
     * ** 判断指定技能的烟雾数量

     *

     * @param cid

     * @param skillId

     * @return
     * @出自类 MapleMap
     */
getMists(cid: number, skillId: number){}
/*
     * 是否PK地图
     * @出自类 MapleMap
     */
isPvpMaps(){}
/**
     * @出自类 MapleMap
*/
getLvLimit(){}
/**
     * @出自类 MapleMap
*/
getMapObjectsInRect(box: any, MapObject_types: any){}
/**
     * @出自类 MapleMap
*/
getRidingField(){}
/**
     * @出自类 MapleMap
*/
setLvLimit(lvLimit: number){}
/**
     * @出自类 MapleMap
*/
getWidth(){}
/**
     * @出自类 MapleMap
*/
set禁止全局掉落(禁止全局掉落: number){}
/**
     * @出自类 MapleMap
*/
spawnMonster(monster: Monster, spawnType: number, overwrite: number){}
/**
     * @出自类 MapleMap
*/
isTown(){}
/**
     * @出自类 MapleMap
*/
getBottom(){}
/**
     * @出自类 MapleMap
*/
getNPCByOid(oid: number){}
/**
     * @出自类 MapleMap
*/
toString(){}
/**
     * 对当前地图可维持怪物数量的增加

     *

     * @return 小数表示的百分比，比如 1.5 = 150%
     * @出自类 MapleMap
     */
get轮回数量加成(){}
/**
     * 杀死范围内怪物
     * @出自类 MapleMap
     */
killMonsterInRange(x1: number, y1: number, x2: number, y2: number, animate: number){}
/**
     * @出自类 MapleMap
*/
至暗魔晶BOSS台阶(){}
/**
     * @出自类 MapleMap
*/
getAllItemsThreadsafe(){}
/**
     * @出自类 MapleMap
*/
addMonsterSpawn(mobId: number, spawnPoint: any, mobTime: number){}
/**
     * @出自类 MapleMap
*/
黑魔法师2阶段穿刺之眼(){}
/**
     * @出自类 MapleMap
*/
getStreetName(){}
/**
     * @出自类 MapleMap
*/
getPointOfItem(itemId: number){}
/**
     * 164+ 似乎只用于我的小屋
     * @出自类 MapleMap
     */
getActualMap(){}
/**
     * @出自类 MapleMap
*/
getAllMistsThreadsafe(){}
/**
     * @出自类 MapleMap
*/
spawnTownPortal(townPortal: any){}
/**
     * @出自类 MapleMap
*/
show扎昆台阶(){}
/**
     * @出自类 MapleMap
*/
getFieldLimit(){}
/**
     * @出自类 MapleMap
*/
getReactorByName(name: String){return new Reactor() }
/**
     * @出自类 MapleMap
*/
spawnReactorIfNotExist(id: number, state: number, x: number, y: number, face: number, name: String){return new Reactor() }
/**
     * @出自类 MapleMap
*/
getFixedMob(){}
/**
     * @出自类 MapleMap
*/
getReactorByOid(oid: number){return new Reactor() }
/**
     * @出自类 MapleMap
*/
getHeight(){}
/**
     * @出自类 MapleMap
*/
spawnMesoDrop_item(meso: number, position: any, dropper: any, owner: Character, playerDrop: number, droptype: number){}
/**
     * @出自类 MapleMap
*/
get刷新怪物间隔(){}
/**
     * @出自类 MapleMap
*/
getLeft(){}
/**
     * @出自类 MapleMap
*/
setHpDecInterval(hpDecInterval: number){}
/**
     * @出自类 MapleMap
*/
broadcastMessage(packet: any, rangedFrom: any){}
/**
     * @出自类 MapleMap
*/
getGuardians(){}
/**
     * @出自类 MapleMap
*/
初始化黑魔法师3阶段平台(){}
/**
     * @出自类 MapleMap
*/
resetShammos(c: any){}
/**
     * @出自类 MapleMap
*/
removeMonster(monster: Monster){}
/**
     * @出自类 MapleMap
*/
onDynamicObjVisible(str: any, i1: any){}
/**
     * @出自类 MapleMap
*/
startExtendedMapEffect(msg: String, itemId: number){}
/**
     * @出自类 MapleMap
*/
setForceMove(forceMove: number){}
/**
     * @出自类 MapleMap
*/
getCharacterByName(id: String){return new Character() }
/**
     * 地图里所有怪物的数量
     * @出自类 MapleMap
     */
getNumMonsters(){}
/**
     * @出自类 MapleMap
*/
calcPointBelow(initial: any){}
/**
     * @出自类 MapleMap
*/
spawnAutoDrop(itemId: number, pos: any){}
/**
     * @出自类 MapleMap
*/
getAllMonsters(){}
/**
     * @出自类 MapleMap
*/
getMapObject(oid: number, type: any){}
/**
     * @出自类 MapleMap
*/
setPartyBonusRate(partyBonusRate: number){}
/**
     * returns a monster with the given oid, if no such monster exists returns

     * null

     *

     * @param oid

     * @return
     * @出自类 MapleMap
     */
getMonsterByOid(oid: number){return new Monster() }
/**
     * @出自类 MapleMap
*/
hasEliteMob(){}
/**
     * @出自类 MapleMap
*/
getMapObjectSize(){}
/**
     * @出自类 MapleMap
*/
getObstacleAtomIndex(){}
/**
     * @出自类 MapleMap
*/
spawnRevives(monster: Monster, oid: number){}
/**
     * @出自类 MapleMap
*/
getNPCById(id: number){}
/**
     * @出自类 MapleMap
*/
set刷怪上限加成百分比(刷怪上限加成百分比: number){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster, chr: Character, withDrops: number, second: number, animation: number, lastSkill: number){}
/**
     * @出自类 MapleMap
*/
getAllItems(){}
/**
     * @出自类 MapleMap
*/
makeCarnivalSpawn(team: number, newMons: Monster, num: number){}
/**
     * @出自类 MapleMap
*/
addKSPsychicObject(chrid: number, pl: any){}
/**
     * @出自类 MapleMap
*/
getReactorById(id: number){return new Reactor() }
/**
     * @出自类 MapleMap
*/
setReactorState(state: number){}
/**
     * @出自类 MapleMap
*/
getPartyBonusRate(){}
/**
     * @出自类 MapleMap
*/
disappearingItemDrop(dropper: any, owner: Character, item: any, pos: any){}
/**
     * @出自类 MapleMap
*/
setStreetName(streetName: String){}
/**
     * @出自类 MapleMap
*/
getForceMove(){}
/**
     * @出自类 MapleMap
*/
spawnMonsterWithEffectBelow(mob: Monster, pos: any, effect: number){}
/**
     * @出自类 MapleMap
*/
spawnMist(mapMist: any){}
/**
     * @出自类 MapleMap
*/
getRecoveryRate(){}
/**
     * @出自类 MapleMap
*/
setLastHurtTime(lastHurtTime: number){}
/**
     * @出自类 MapleMap
*/
getLevelLimit(){}
/*
     * command to reset all item-reactors in a map to state 0 for GM/NPC use - not tested (broken reactors get removed from mapobjects when destroyed) Should create instances for multiple copies of
     * non-respawning reactors...
     * @出自类 MapleMap
     */
resetReactors(){}
/**
     * @出自类 MapleMap
*/
freezeAllLifes(){}
/**
     * @出自类 MapleMap
*/
spawnFort(fort: any, duration: number){}
/**
     * @出自类 MapleMap
*/
canSpawn(now: number){}
/**
     * @出自类 MapleMap
*/
isHasClock(){}
/**
     * 获取当前地图烟雾是否存在

     *

     * @param skillId

     * @return
     * @出自类 MapleMap
     */
getMapMist(skillId: number){}
/**
     * @出自类 MapleMap
*/
威尔血条(){}
/**
     * @出自类 MapleMap
*/
is骑乘地图(){}
/**
     * @出自类 MapleMap
*/
getConsumeItemCoolTime(){}
/**
     * @出自类 MapleMap
*/
getCharacters(){}
/**
     * @出自类 MapleMap
*/
isSpawn(){}
/**
     * @出自类 MapleMap
*/
getMobsToSpawn(){}
/**
     * Automagically finds a new controller for the given monster from the chars

     * on the map...

     *

     * @param monster
     * @出自类 MapleMap
     */
updateMonsterController(monster: Monster){}
/**
     * @出自类 MapleMap
*/
spawnMobDrop(idrop: any, dropPos: any, mob: Monster, chr: Character, droptype: number, questid: number){}
/**
     * @出自类 MapleMap
*/
getMaxRegularSpawn(){}
/**
     * @出自类 MapleMap
*/
hasLevelRangeMob(chr: Character){}
/**
     * @出自类 MapleMap
*/
getPaplatus(){}
/**
     * @出自类 MapleMap
*/
getFieldType(){}
/**
     * @出自类 MapleMap
*/
getMonsterByOid(oids: any){}
/**
     * 随机生成一个不太靠边的坐标
     * @出自类 MapleMap
     */
getRandomFinePosition(){}
/**
     * @出自类 MapleMap
*/
resetAllSpawnPoint(mobid: number, mobTime: number){}
/**
     * @出自类 MapleMap
*/
onSyncDynamicFoothold(str: any, value0: any, value1: any, value2: any, value3: any){}
/**
     * @出自类 MapleMap
*/
getNodes(){}
/**
     * @出自类 MapleMap
*/
broadcastMessage(source: Character, packet: any, rangeSq: number, rangedFrom: any){}
/**
     * @出自类 MapleMap
*/
setReturnMapId(returnMapId: number){}
/**
     * @出自类 MapleMap
*/
startMapEffect(msg: String, itemId: number, jukebox: number){}
/**
     * @出自类 MapleMap
*/
resetNPCs(){}
/**
     * 刷新怪物

     *

     * @param force 强制刷新
     * @出自类 MapleMap
     */
respawn(force: number){}
/**
     * @出自类 MapleMap
*/
killMonster(monsId: number){}
/**
     * @出自类 MapleMap
*/
getTop(){}
/**
     * @出自类 MapleMap
*/
setFieldType(fieldType: any){}
/**
     * @出自类 MapleMap
*/
setNodes(nodes: any){}
/**
     * @出自类 MapleMap
*/
getReturnMap(){return new MapleMap() }
/**
     * @出自类 MapleMap
*/
getAllReactors(){}
/**
     * @出自类 MapleMap
*/
getNumPlayersInRect(rect: any){}
/**
     * @出自类 MapleMap
*/
使用轮回石碑(chr: Character){}
/**
     * @出自类 MapleMap
*/
黑魔法师3阶NPC怪物_移动(){}
/**
     * @出自类 MapleMap
*/
canHurt(now: number){}
/**
     * @出自类 MapleMap
*/
hasFieldLimit(fieldLimitType: any){}
/**
     * @出自类 MapleMap
*/
disconnectAll(){}
/**
     * @出自类 MapleMap
*/
spawnNpc(id: number, pos: any){}
/**
     * @出自类 MapleMap
*/
spawnDebug(){}
/**
     * @出自类 MapleMap
*/
getAreas(){}
/**
     * @出自类 MapleMap
*/
removeMapObject(obj: any){}
/**
     * @出自类 MapleMap
*/
show斯乌台阶(){}
/**
     * @出自类 MapleMap
*/
broadcastMessage(source: Character, packet: any, repeatToSource: number){}
/**
     * @出自类 MapleMap
*/
set骑乘地图(骑乘地图: number){}
/**
     * @出自类 MapleMap
*/
setLevelLimit(levelLimit: number){}
/*
     * command to shuffle the positions of all reactors in a map for PQ purposes (such as ZPQ/LMPQ)
     * @出自类 MapleMap
     */
shuffleReactors(){}
/**
     * @出自类 MapleMap
*/
getAllRunes(){}
/**
     * 在角色附近随机生成坐标

     *

     * @return
     * @出自类 MapleMap
     */
getRandomPos(){}
/**
     * @出自类 MapleMap
*/
黑魔法师3阶NPC怪物_攻击(){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster, chr: Character, withDrops: number, second: number, animation: number, lastSkill: number, blog: number){}
/**
     * @出自类 MapleMap
*/
getCharactersSize(){}
/**
     * @出自类 MapleMap
*/
getSkillIds(){}
/**
     * @出自类 MapleMap
*/
getPlayersInRectAndInList(box: any, chrList: any){}
/**
     * @出自类 MapleMap
*/
setSpawn(spawn: number){}
/**
     * @出自类 MapleMap
*/
resetPQ(level: number){}
/**
     * @出自类 MapleMap
*/
isLastNode(index: number){}
/**
     * @出自类 MapleMap
*/
setTop(top: number){}
/**
     * 杀死场景所有怪物

     *

     * @param animate 是否有死亡动画
     * @出自类 MapleMap
     */
killAllMonsters(animate: number){}
/**
     * @出自类 MapleMap
*/
spawnMonsterOnGroundBelow(mob: Monster, pos: any){}
/**
     * @出自类 MapleMap
*/
sendPackets(c: any){}
/**
     * 召唤精英怪

     *

     * @param mobId
     * @出自类 MapleMap
     */
spawnEliteBoss(mobId: number){}
/**
     * @出自类 MapleMap
*/
resetFully(){}
/**
     * @出自类 MapleMap
*/
getRight(){}
/**
     * @出自类 MapleMap
*/
getExtractorByOwner(owner: number){}
/**
     * @出自类 MapleMap
*/
setInstanceId(instanceId: number){}
/**
     * @出自类 MapleMap
*/
getMapName(){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster, chr: Character, withDrops: number, second: number, animation: number){}
/**
     * @出自类 MapleMap
*/
getRandomMonster(){return new Monster() }
/**
     * @出自类 MapleMap
*/
setTown(town: number){}
/**
     * @出自类 MapleMap
*/
getNode(index: number){}
/**
     * @出自类 MapleMap
*/
addMapObject(mapobject: any){}
/**
     * @出自类 MapleMap
*/
findClosestSpawnpoint(from: any){return new MaplePortal() }
/**
     * @出自类 MapleMap
*/
getInstanceId(){}
/**
     * @出自类 MapleMap
*/
getMonsterSpawn(){}
/**
     * @出自类 MapleMap
*/
setMapName(mapName: String){}
/**
     * @出自类 MapleMap
*/
shuffleReactors(first: number, last: number){}
/**
     * @出自类 MapleMap
*/
spawnMesoDrop(meso: number, position: any, dropper: any, owner: Character, playerDrop: number, droptype: number){}
/**
     * @出自类 MapleMap
*/
getOnFirstUserEnter(){}
/**
     * @出自类 MapleMap
*/
setRunningOid(runningOid: number){}
/**
     * @出自类 MapleMap
*/
setReactorState(){}
/**
     * @出自类 MapleMap
*/
setRecoveryRate(recoveryRate: number){}
/**
     * @出自类 MapleMap
*/
killMonster(monsId: number, animate: number){}
/**
     * @出自类 MapleMap
*/
setFootholds(footholds: any){}
/**
     * @出自类 MapleMap
*/
setBurningArea(burningArea: any){}
/**
     * @出自类 MapleMap
*/
getFootholds(){}
/*
     * 是否组队PK地图
     * @出自类 MapleMap
     */
isPartyPvpMap(){}
/**
     * @出自类 MapleMap
*/
setBottom(bottom: number){}
/**
     * @出自类 MapleMap
*/
setFixedMob(fixedMob: number){}
/**
     * @出自类 MapleMap
*/
setObstacleAtomIndex(obstacleAtomIndex: number){}
/*
     * 是否个人PK地图
     * @出自类 MapleMap
     */
isPersonalPvpMap(){}
/**
     * @出自类 MapleMap
*/
is精英首领怪出没(){}
/**
     * @出自类 MapleMap
*/
removeNpc(npcid: number){}
/**
     * @出自类 MapleMap
*/
getCharacterById(id: number){return new Character() }
/**
     * @出自类 MapleMap
*/
黑魔法师3阶段激光(){}
/**
     * ** 删除指定技能的烟雾skillId

     *

     * @param skillId
     * @出自类 MapleMap
     */
removeMistBySkillId(cid: number, skillId: number){}
/**
     * @出自类 MapleMap
*/
toggle禁止全局掉落(){}
/**
     * @出自类 MapleMap
*/
resetFully(respawn: number){}
/**
     * @出自类 MapleMap
*/
黑魔法师锁链攻击(a: number){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster, chr: Character, withDrops: number, second: number, animation: number, blog: number){}
/**
     * @出自类 MapleMap
*/
startSimpleMapEffect(msg: String, itemId: number){}
/**
     * @出自类 MapleMap
*/
getHpDecInterval(){}
/**
     * @出自类 MapleMap
*/
getReturnMapId(){}
/**
     * @出自类 MapleMap
*/
getLastSpawnTime(){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster, animate: number){}
/**
     * @出自类 MapleMap
*/
addPlayer(chr: Character){}
/**
     * @出自类 MapleMap
*/
威尔月光值(count: number){}
/**
     * @出自类 MapleMap
*/
getLastHurtTime(){}
/**
     * @出自类 MapleMap
*/
is禁止所有掉落(){}
/**
     * @出自类 MapleMap
*/
broadcastMessage(packet: any){}
/**
     * @出自类 MapleMap
*/
getMistByOid(oid: number){}
/**
     * @出自类 MapleMap
*/
getForcedReturnMapId(){}
/**
     * @出自类 MapleMap
*/
getOnUserEnter(){}
/**
     * @出自类 MapleMap
*/
calcDropPos(initial: any, defaultPoint: any){}
/**
     * @出自类 MapleMap
*/
spawnReactorOnGroundBelow(reactor: Reactor, pos: any){}
/**
     * @出自类 MapleMap
*/
getArea(index: number){}
/**
     * @出自类 MapleMap
*/
setHpDecProtectItem(hpDecProtectItem: number){}
/**
     * @出自类 MapleMap
*/
containsNPC(id: number){}
/**
     * @出自类 MapleMap
*/
spawnOpenGate(mapOpenGate: any){}
/**
     * @出自类 MapleMap
*/
spawnSinglePlayerMobDrop(idrop: any, mob: Monster, chr: Character, droptype: number){}
/**
     * @出自类 MapleMap
*/
getAllMechDoors(){}
/**
     * @出自类 MapleMap
*/
getForcedReturnMap(){return new MapleMap() }
/**
     * @出自类 MapleMap
*/
getExtractorSize(){}
/**
     * @出自类 MapleMap
*/
getMonsterRate(){}
/**
     * @出自类 MapleMap
*/
movePlayer(chr: Character, newPosition: any){}
/**
     * @出自类 MapleMap
*/
mapMessage(type: number, message: String){}
/**
     * @出自类 MapleMap
*/
startJukebox(msg: String, itemId: number){}
/**
     * @出自类 MapleMap
*/
set刷新怪物间隔(刷新怪物间隔: number){}
/**
     * @出自类 MapleMap
*/
hideNpc(npcid: number){}
/**
     * 地图里所有道具的数量
     * @出自类 MapleMap
     */
getNumItems(){}
/**
     * @出自类 MapleMap
*/
isEverlast(){}
/**
     * @出自类 MapleMap
*/
getAllSummons(){}
/**
     * @出自类 MapleMap
*/
setForcedReturnMapId(forcedReturnMapId: number){}
/**
     * @出自类 MapleMap
*/
spawnRandDrop(){}
/**
     * 164+ 似乎只用于我的小屋
     * @出自类 MapleMap
     */
setActualMap(actualMap: number){}
/**
     * @出自类 MapleMap
*/
moveMonster(monster: Monster, reportedPos: any){}
/**
     * ** 删除指定技能的烟雾skillId

     *

     * @param
     * @出自类 MapleMap
     */
removeMist(oid: number){}
/**
     * @出自类 MapleMap
*/
setEverlast(everlast: number){}
/**
     * @出自类 MapleMap
*/
resetPortals(){}
/**
     * @出自类 MapleMap
*/
黑魔法师4段海胆爆炸攻击(){}
/**
     * @出自类 MapleMap
*/
addMonsterSpawn(monster: Monster, mobTime: number, carnivalTeam: number, msg: String){}
/**
     * @出自类 MapleMap
*/
getMapObjectsInRange(from: any, rangeSq: number, mapObjectTypes: any){}
/**
     * @出自类 MapleMap
*/
getAllNPCsThreadsafe(){}
/**
     * @出自类 MapleMap
*/
getHpDecProtectItem(){}
/**
     * @出自类 MapleMap
*/
getMonsterById(id: number){return new Monster() }
/**
     * @出自类 MapleMap
*/
黑魔法师3阶NPC怪物_召唤(){}
/**
     * @出自类 MapleMap
*/
killMonster(monster: Monster){}
/**
     * @出自类 MapleMap
*/
broadcastNONGMMessage(source: Character, packet: any, repeatToSource: number){}
/**
     * @出自类 MapleMap
*/
黑魔法师4段黑白必杀(){}
/**
     * @出自类 MapleMap
*/
移除轮回石碑(chr: Character){}
/**
     * @出自类 MapleMap
*/
getPortal(portalname: String){return new MaplePortal() }
/**
     * @出自类 MapleMap
*/
至暗魔晶能量条(count: number){}
/**
     * @出自类 MapleMap
*/
setOnFirstUserEnter(onFirstUserEnter: String){}
/**
     * @出自类 MapleMap
*/
getAllDoors(){}
/**
     * @出自类 MapleMap
*/
setTimeLimit(timeLimit: number){}
/**
     * @出自类 MapleMap
*/
spawnAutoDrop(itemId: number, from: any, to: any, touchPick: any, dropSpeed: any, touchDropSpeed: any){}
/**
     * @出自类 MapleMap
*/
setMaxRegularSpawn(maxRegularSpawn: number){}
/**
     * 刷新怪物

     *

     * @param force 强制刷新

     * @param now   刷新时间点
     * @出自类 MapleMap
     */
respawn(force: number, now: number){}
/**
     * @出自类 MapleMap
*/
nextObstacleAtomIndex(){}
/**
     * @出自类 MapleMap
*/
郭凯尔雷攻击(){}
/**
     * @出自类 MapleMap
*/
findPlayerById(id: number){return new Character() }
/**
     * @出自类 MapleMap
*/
makeCarnivalReactor(team: number, num: number){}
/**
     * @出自类 MapleMap
*/
spawnItemDrop(dropper: any, owner: Character, item: any, pos: any, playerDrop: number){}
/**
     * @param id 要检查的怪物的ID

     * @return 指定ID的怪物的数量
     * @出自类 MapleMap
     */
countMonsterById(id: number){}
/**
     * @出自类 MapleMap
*/
spawnAutoDrop(itemId: number, x: number, y: number){}
/**
     * @出自类 MapleMap
*/
getHousingGrids(){}
/**
     * @出自类 MapleMap
*/
getMapObjectsInRange(from: any, rangeSq: number){}
/**
     * @出自类 MapleMap
*/
getDirectionInfo(i: number){}
/**
     * @出自类 MapleMap
*/
getItemsSize(){}
/**
     * @出自类 MapleMap
*/
getChannel(){}
/**
     * @出自类 MapleMap
*/
spawnMonsterWithEffect(monster: Monster, effect: number, pos: any){}
/**
     * @出自类 MapleMap
*/
destroyReactor(oid: number){}
/**
     * @出自类 MapleMap
*/
findClosestPortal(from: any){return new MaplePortal() }
/**
     * @出自类 MapleMap
*/
broadcastMessage(source: Character, packet: any, rangedFrom: any){}
/**
     * @出自类 MapleMap
*/
get刷怪上限加成百分比(){}
/**
     * @出自类 MapleMap
*/
郭凯尔_红黑火陨石_向左(){}
/**
     * ** 判断指定技能的烟雾是否存在

     *

     * @param

     * @return
     * @出自类 MapleMap
     */
hasMistSkillId(cid: number, skillId: number){}
/**
     * @出自类 MapleMap
*/
removeDrops(){}
/**
     * @出自类 MapleMap
*/
getPointByOffset(ori: any, xOffset: number, yOffset: number){}
/**
     * @出自类 MapleMap
*/
getTimeLimit(){}
/**
     * @出自类 MapleMap
*/
toggle禁止所有掉落(){}
/**
     * @出自类 MapleMap
*/
blockAllPortal(){}
/**
     * 中间公告-天气效果

     *

     * @param msg     内容

     * @param type    类型

     * @param time    持续时间

     * @param bForced
     * @出自类 MapleMap
     */
getWeatherEffectNotice(msg: String, type: number, time: number, bForced: number){}
/**
     * @出自类 MapleMap
*/
removeKSPsychicObject(chrid: number, skillid: number, moboid: number){}
/**
     * type 1左往右，-1右往左，0之字型

     *

     * @param type
     * @出自类 MapleMap
     */
黑魔法师_暗物质(type: number){}
/**
     * @出自类 MapleMap
*/
黑魔法师_晨星(){}
/**
     * @出自类 MapleMap
*/
getHpDec(){}
/**
     * 白色球
     * @出自类 MapleMap
     */
黑魔法师_创造之力(){}
/**
     * @出自类 MapleMap
*/
setRidingField(ridingField: number){}
/**
     * 移动平台
     * @出自类 MapleMap
     */
乌鲁斯_动态移动物体(x1: number, y1: number, x2: number, y2: number, n1: number, n2: number, r: number, start: number, speed: number, name: String){}
/**
     * @出自类 MapleMap
*/
setHasClock(hasClock: number){}
/**
     * @出自类 MapleMap
*/
loadMonsterRate(first: number){}
/**
     * @出自类 MapleMap
*/
is禁止全局掉落(){}
/**
     * @出自类 MapleMap
*/
getPortal(portalid: number){return new MaplePortal() }
}
class Character {
/**
     * @出自类 Character
*/
removeSummon(summon: any){}
/**
     * @出自类 Character
*/
getPlayerPoints(){}
/**
     * 中上方消息，有个道具顶头

     *

     * @param item

     * @param text
     * @出自类 Character
     */
getTopMsgByItem(item: number, text: String){}
/**
     * @出自类 Character
*/
getMessenger(){}
/**
     * @出自类 Character
*/
setDragon(dragon: any){}
/**
     * @出自类 Character
*/
getMarriage(){}
/**
     * @出自类 Character
*/
clearWreckages(){}
/**
     * @出自类 Character
*/
getAvailableCP(){}
/**
     * @出自类 Character
*/
getSchedule(key: String){}
/**
     * @出自类 Character
*/
changeBags(){}
/**
     * @出自类 Character
*/
setChairtext(chairtext: String){}
/**
     * @出自类 Character
*/
setId(id: number){}
/**
     * @出自类 Character
*/
getImps(){}
/**
     * @出自类 Character
*/
getDpoints(){}
/**
     * @出自类 Character
*/
getBounds(){}
/**
     * @出自类 Character
*/
getGuildContribution(){}
/**
     * @出自类 Character
*/
getLevel(){}
/**
     * @出自类 Character
*/
get敛财术数量(){}
/**
     * @出自类 Character
*/
setLastSummonTime(lastSummonTime: number){}
/**
     * @出自类 Character
*/
addHyPay(hypay: number){}
/**
     * @出自类 Character
*/
get缩放人物大小(){}
/**
     * @出自类 Character
*/
getChannelServer(){}
/**
     * 获取指定技能的召唤兽summonsid

     *

     * @param skillId

     * @return
     * @出自类 Character
     */
getSummonsOwnerId(skillId: number){}
/**
     * @出自类 Character
*/
getPvpStats(){}
/**
     * @出自类 Character
*/
setAp(ap: number){}
/**
     * @出自类 Character
*/
getJobRankMove(){}
/**
     * @出自类 Character
*/
getSubcategory(){}
/**
     * @出自类 Character
*/
getNeededExp(){}
/**
     * Throws unsupported operation exception, oid of players is read only
     * @出自类 Character
     */
setObjectId(id: number){}
/**
     * @出自类 Character
*/
getBaseStats(){}
/**
     * @出自类 Character
*/
setItemEffect(itemEffect: number){}
/**
     * @出自类 Character
*/
setTeam(v: number){}
/**
     * 重置在线时间
     * @出自类 Character
     */
resetGamePoints(){}
/**
     * @出自类 Character
*/
getSummon(skillId: number){}
/**
     * @出自类 Character
*/
controlMonster(monster: Monster, aggro: number){}
/**
     * @出自类 Character
*/
getSummonsSize(){}
/**
     * @出自类 Character
*/
canMP(now: number){}
/**
     * @出自类 Character
*/
disposeClones(){}
/**
     * @出自类 Character
*/
sendSpawnData(client: any){}
/**
     * @出自类 Character
*/
expirationTask(pending: number, firstLoad: number){}
/**
     * Updates a single stat of this MapleCharacter for the org.bms.client. This

     * method only creates and sends an update packet, it does not update the

     * stat stored in this MapleCharacter instance.

     *

     * @param stat

     * @param newval

     * @param itemReaction
     * @出自类 Character
     */
updateSingleStat(stat: any, newval: number, itemReaction: number){}
/**
     * @出自类 Character
*/
giveFame(to: Character){}
/*
     * 克隆
     * @出自类 Character
     */
cloneLook(){}
/**
     * 黑色天堂空战 飞船导弹攻击
     * @出自类 Character
     */
handleShipAttack(){}
/**
     * @出自类 Character
*/
setEpoints(epoints: number){}
/**
     * 男=0 女=1
     * @出自类 Character
     */
getGender(){}
/**
     * @param type 1点卷,2抵用,3消费币,4经验,5乐豆点

     * @param quantity
     * @出自类 Character
     */
modifyCSPoints(type: number, quantity: number){}
/**
     * @出自类 Character
*/
setReviveCount(reviveCount: number){}
/**
     * @出自类 Character
*/
getBeta(){}
/**
     * @出自类 Character
*/
setCurrentTime(currentTime: number){}
/**
     * @出自类 Character
*/
setGuildContribution(_c: number){}
/**
     * @出自类 Character
*/
set商城_积分点数(商城_积分点数: number){}
/**
     * @出自类 Character
*/
setAlpha(alpha: any){}
/**
     * @出自类 Character
*/
set精灵的祝福来源(精灵的祝福来源: String){}
/**
     * @出自类 Character
*/
set神之子发型(hair: number, secondHair: number){}
/**
     * @出自类 Character
*/
removeDoor(){}
/**
     * @出自类 Character
*/
setEars(ears: number){}
/**
     * @出自类 Character
*/
getChatType(){}
/**
     * @出自类 Character
*/
getRMB(){}
/**
     * @param type 1点卷,2抵用,3消费币,4经验,5乐豆点

     * @return
     * @出自类 Character
     */
getCSPoints(type: number){}
/**
     * @出自类 Character
*/
setBeta(beta: any){}
/**
     * @出自类 Character
*/
setGuildId(_id: number){}
/**
     * Convenience function which adds the supplied parameter to the current mp

     * then directly does a updateSingleStat.

     *

     * @param delta

     * @see Character#getBaseStats().setMp(int)
     * @出自类 Character
     */
addMP(delta: number){}
/**
     * @出自类 Character
*/
getVip(){}
/**
     * @出自类 Character
*/
fakeRelog(){}
/**
     * @出自类 Character
*/
getDecomposer(){}
/**
     * @出自类 Character
*/
applyIceGage(x: number){}
/**
     * @出自类 Character
*/
getGuild(){}
/**
     * @出自类 Character
*/
getFamiliars(){}
/**
     * @出自类 Character
*/
canHPRecover(){}
/**
     * @出自类 Character
*/
getLastMonthFameIds(){}
/**
     * @出自类 Character
*/
getTraits(){}
/**
     * 成就信息
     * @出自类 Character
     */
getAchievementStats(){}
/**
     * @出自类 Character
*/
getJobStats(){}
/**
     * @出自类 Character
*/
setFollowInitiator(followInitiator: number){}
/**
     * @出自类 Character
*/
setAvatarStats(avatarStats: any){}
/**
     * @出自类 Character
*/
getSummons(){}
/**
     * @出自类 Character
*/
setRemainingSp(remainingSp: number){}
/**
     * @出自类 Character
*/
setWishlist(wl: any){}
/**
     * @出自类 Character
*/
canSummon(g: number){}
/**
     * @出自类 Character
*/
getControlled(){}
/**
     * @出自类 Character
*/
setWreckageSum(wreckageSum: number){}
/**
     * @出自类 Character
*/
getChalktext(){}
/**
     * @出自类 Character
*/
resetStats(str: number, dex: number, int_: number, luk: number){}
/**
     * 召唤兽自定义召唤 无限量

     *

     * @param movementType=移动类型

     * @param time=持续时间
     * @出自类 Character
     */
spawnSummon(skillId: number, p: any, movementType: any, time: number){}
/**
     * @出自类 Character
*/
sendImp(){}
/**
     * @出自类 Character
*/
getProfessionExp(id: number){}
/**
     * @出自类 Character
*/
changeFace(color: number){}
/**
     * @出自类 Character
*/
setChatType(chatType: number){}
/**
     * @出自类 Character
*/
gainExp(total: number, show: number, OnQuest: number, highestDamage: number){}
/**
     * @出自类 Character
*/
get烟雾攻击坐标(){}
/**
     * @出自类 Character
*/
getSecondHair(){}
/**
     * @出自类 Character
*/
getJobRank(){}
/**
     * @出自类 Character
*/
getWreckages(){}
/**
     * @出自类 Character
*/
get祝福盔甲CDtime(){}
/**
     * @出自类 Character
*/
setGender(gender: number){}
/**
     * 角色确认死亡后的处理
     * @出自类 Character
     */
onDead(){}
/*
     * 提示信息
     * @出自类 Character
     */
dropTopMsg(message: String){}
/**
     * @出自类 Character
*/
canHP(now: number){}
/**
     * @出自类 Character
*/
isAlive(){}
/**
     * @出自类 Character
*/
getScrolledPosition(){}
/**
     * @出自类 Character
*/
setMarriage(marriage: any){}
/**
     * @出自类 Character
*/
getRemainingAp(){}
/**
     * @出自类 Character
*/
setDirection(inst: number){}
/**
     * @出自类 Character
*/
setLastRes(lastRes: any){}
/**
     * @出自类 Character
*/
setGachexp(gachexp: number){}
/**
     * @出自类 Character
*/
getFallCounter(){}
/**
     * @出自类 Character
*/
getNumClones(){}
/**
     * @出自类 Character
*/
is禁言(){}
/**
     * @出自类 Character
*/
getLastRecoveryTime(){}
/**
     * @出自类 Character
*/
setTotalLosses(totalLosses: number){}
/**
     * @出自类 Character
*/
cancelSchedule(key: String){}
/**
     * @出自类 Character
*/
setMonsterCombo(monsterCombo: number){}
/**
     * @出自类 Character
*/
getRank(){}
/**
     * @出自类 Character
*/
getAllLinkMid(){}
/**
     * @出自类 Character
*/
afterLoginBuffCheck(){}
/**
     * @出自类 Character
*/
setChalkboard(text: String){}
/**
     * @出自类 Character
*/
get飞船攻击次数(){}
/**
     * @出自类 Character
*/
update装备特效开关(pos: number){}
/**
     * @出自类 Character
*/
getHpApUsed(){}
/**
     * @出自类 Character
*/
setLinkMid(lm: number, x: number){}
/**
     * @出自类 Character
*/
switchLuckyMoney(on: number){}
/**
     * @出自类 Character
*/
getFatigue(){}
/**
     * @出自类 Character
*/
getLastRes(){}
/**
     * @return 考虑到所有加成后的最终金币倍率
     * @出自类 Character
     */
getTotalMesoDropBonus(){}
/**
     * @出自类 Character
*/
setChatSession(session: any){}
/**
     * @出自类 Character
*/
getMapOpenGate(){}
/**
     * @出自类 Character
*/
setTotalWins(totalWins: number){}
/**
     * @出自类 Character
*/
modifyCSPoints(type: number, quantity: number, show: number){}
/**
     * @出自类 Character
*/
getDirection(){}
/**
     * @出自类 Character
*/
getGmLevel(){}
/**
     * @出自类 Character
*/
spawnFamiliar(mf: any){}
/**
     * @出自类 Character
*/
setElf(elf: number){}
/**
     * @出自类 Character
*/
setAllianceRank(rank: number){}
/**
     * @出自类 Character
*/
resetAp(){}
/**
     * @出自类 Character
*/
setHiddenChatCanSee(hiddenChatCanSee: number){}
/**
     * @出自类 Character
*/
setHair(hair: number){}
/**
     * @出自类 Character
*/
getNextConsume(){}
/**
     * @出自类 Character
*/
getProfessionLevel(id: number){}
/**
     * @出自类 Character
*/
stopControllingMonster(monster: Monster){}
/**
     * @出自类 Character
*/
removeDragon(){}
/**
     * 判断指定技能的召唤兽是否存在

     *

     * @param skillId

     * @return
     * @出自类 Character
     */
hasSummonSkill(skillId: number){}
/**
     * @出自类 Character
*/
setTotalrep(totalrep: number){}
/**
     * @出自类 Character
*/
getVipTime(){}
/**
     * @出自类 Character
*/
reUpdateStat(hasRecovery: number, recalculate: number){}
/**
     * @出自类 Character
*/
getEventInstance(){return new EventManager() }
/**
     * @出自类 Character
*/
setSkipOnceChat(skipOnceChat: number){}
/**
     * @出自类 Character
*/
getTotalrep(){}
/**
     * @出自类 Character
*/
doRecovery(){}
/**
     * @出自类 Character
*/
setEventInstance(eventInstance: EventManager){}
/**
     * @出自类 Character
*/
dropMessage(type: number, message: String){}
/**
     * @出自类 Character
*/
getControlledMonsters(){}
/**
     * @出自类 Character
*/
resetSps(sp: number){}
/**
     * @出自类 Character
*/
getOldPosition(){}
/**
     * @出自类 Character
*/
gainEPoints(amount: number){}
/*
     * 角色的爆率倍数 是否有双倍爆率卡
     * @出自类 Character
     */
getDropMod(){}
/**
     * 强行复活
     * @出自类 Character
     */
forceRevive(){}
/**
     * @出自类 Character
*/
getCoconutteam(){}
/**
     * @出自类 Character
*/
getRps(){}
/**
     * @出自类 Character
*/
makeDragon(job: number){}
/**
     * @出自类 Character
*/
getFH(){}
/**
     * @出自类 Character
*/
getDeadtime(){}
/**
     * @出自类 Character
*/
getInvStats(){}
/**
     * @出自类 Character
*/
getProfessions(){}
/**
     * @出自类 Character
*/
get交易类型(){}
/**
     * @出自类 Character
*/
setGmLevel(level: number){}
/**
     * @出自类 Character
*/
isAdmin(){}
/**
     * @出自类 Character
*/
prepareRecovery(){}
/**
     * @出自类 Character
*/
changeJob(newJob: number){}
/**
     * @出自类 Character
*/
removeMechDoor(){}
/**
     * @出自类 Character
*/
get缩放人物时间(){}
/**
     * @出自类 Character
*/
setFame(fame: number){}
/**
     * @出自类 Character
*/
getLastTime(){}
/**
     * @出自类 Character
*/
isInvincible(){}
/**
     * @出自类 Character
*/
sendNote(to: String, msg: String, fame: number){}
/**
     * @出自类 Character
*/
getCurrentrep(){}
/**
     * @出自类 Character
*/
updateStat(stats: any, newvals: any){}
/**
     * @出自类 Character
*/
setLastFameTime(lastFameTime: number){}
/**
     * @出自类 Character
*/
setDevicetext(devicetext: String){}
/**
     * 单纯用来对接API类，方便操作
     * @出自类 Character
     */
getAPI(){return new AbstractPlayerInteraction() }
/**
     * @return 考虑到所有加成后的最终爆率倍率
     * @出自类 Character
     */
getTotalItemDropBonus(){}
/**
     * @出自类 Character
*/
getFort(){}
/**
     * @出自类 Character
*/
getVisibleMapObjects(){}
/**
     * @出自类 Character
*/
setLastRecoveryTime(lastRecoveryTime: number){}
/**
     * @出自类 Character
*/
setSubcategory(subcategory: number){}
/**
     * @出自类 Character
*/
getLinkMobs(){}
/**
     * @出自类 Character
*/
getAndroid(){}
/**
     * @出自类 Character
*/
getKeyLayout(){}
/**
     * @出自类 Character
*/
setAndroid(android: any){}
/**
     * @出自类 Character
*/
getPoints(){}
/**
     * 5=6 10=7 15=8 20=9 25=10 30=11

     *

     * @param count
     * @出自类 Character
     */
gain钢铁之躯叠加(count: number){}
/**
     * @出自类 Character
*/
setVpoints(vpoints: number){}
/**
     * 设置角色疲劳值
     * @出自类 Character
     */
setFatigue(j: number){}
/**
     * @出自类 Character
*/
setClient(client: any){}
/**
     * @出自类 Character
*/
isHiddenChatCanSee(){}
/**
     * 是否处于对话中，防止多次对话掉线
     * @出自类 Character
     */
is正在对话中(){}
/**
     * @出自类 Character
*/
sendDestroyData(client: any){}
/**
     * @出自类 Character
*/
getMonsterCombo(){}
/**
     * @出自类 Character
*/
getLastMPTime(){}
/**
     * @出自类 Character
*/
setLastMPTime(lastMPTime: number){}
/**
     * @出自类 Character
*/
showNote(){}
/**
     * @出自类 Character
*/
removeSkillPet(){}
/**
     * @出自类 Character
*/
removeFamiliar(all: number){}
/**
     * @出自类 Character
*/
gainSp(sp: number, skillbook: number){}
/**
     * @出自类 Character
*/
getStorage(){}
/**
     * @出自类 Character
*/
getWishlistSize(){}
/**
     * @出自类 Character
*/
getMinigame(){}
/**
     * @出自类 Character
*/
addDemonMp(delta: number){}
/**
     * @出自类 Character
*/
spawnClones(){}
/**
     * @出自类 Character
*/
isFollowInitiator(){}
/**
     * @出自类 Character
*/
getLastHPTime(){}
/**
     * 删除所有召唤兽
     * @出自类 Character
     */
removeAllSummon(){}
/**
     * @出自类 Character
*/
getWishlist(){}
/**
     * 用于出入商城的时候记录原来所在的频道
     * @出自类 Character
     */
setFromChannel(fromChannel: number){}
/**
     * @出自类 Character
*/
getChair(){}
/**
     * @出自类 Character
*/
setFort(fort: any){}
/**
     * @出自类 Character
*/
getChairtext(){}
/**
     * @出自类 Character
*/
getCashShop(){}
/**
     * @出自类 Character
*/
set飞船攻击次数(飞船攻击次数: number){}
/**
     * @出自类 Character
*/
makeSkillPet(){}
/**
     * @出自类 Character
*/
getMarriageItemId(){}
/**
     * @出自类 Character
*/
eventRevive(){}
/**
     * @出自类 Character
*/
getCloneSize(){}
/**
     * @出自类 Character
*/
getControlledLock(){}
/**
     * @出自类 Character
*/
getWreckageSum(){}
/**
     * @出自类 Character
*/
checkMonsterAggro(monster: Monster){}
/**
     * @出自类 Character
*/
setLastMonsterCombo(lastMonsterCombo: number){}
/**
     * @出自类 Character
*/
getAccountId(){}
/**
     * @出自类 Character
*/
getParty(){}
/**
     * @出自类 Character
*/
useCP(ammount: number){}
/**
     * @出自类 Character
*/
addProfessionExp(id: number, expGain: number){}
/**
     * @出自类 Character
*/
setCurrentrep(currentrep: number){}
/**
     * 判断指定技能的召唤兽数量
     * @出自类 Character
     */
getSummonSkillAll(skillId: number){}
/**
     * @出自类 Character
*/
setFollowId(fi: number){}
/**
     * @出自类 Character
*/
setFallCounter(fallCounter: number){}
/**
     * @出自类 Character
*/
getSummonsCount(skillId: number){}
/**
     * @出自类 Character
*/
getLastSummonTime(){}
/**
     * @出自类 Character
*/
canMPRecover(){}
/**
     * ** 删除指定技能的召唤兽

     *

     * @param skillId
     * @出自类 Character
     */
removeSummon(skillId: number){}
/**
     * @出自类 Character
*/
getLastFameTime(){}
/**
     * @出自类 Character
*/
setLastTime(lastTime: number){}
/**
     * @出自类 Character
*/
get药剂罐(){}
/**
     * @出自类 Character
*/
setDeadtime(deadtime: number){}
/**
     * @出自类 Character
*/
getInitialSpawnPoint(){}
/**
     * @出自类 Character
*/
setGuildRank(_rank: number){}
/**
     * @出自类 Character
*/
getSkillStats(){}
/**
     * @出自类 Character
*/
isIntern(){}
/**
     * 获取指定技能的召唤兽oid

     *

     * @param skillId

     * @return
     * @出自类 Character
     */
getSummonObjectId(skillId: number){}
/**
     * @出自类 Character
*/
setDecomposer(me: any){}
/**
     * @出自类 Character
*/
get女皇的祝福来源(){}
/**
     * @出自类 Character
*/
getChalkboard(){}
/**
     * @出自类 Character
*/
getBuddylist(){}
/**
     * @出自类 Character
*/
isSuperGM(){}
/**
     * @出自类 Character
*/
changeRemoval(){}
/**
     * @出自类 Character
*/
silentPartyUpdate(){}
/**
     * @出自类 Character
*/
resetSp(){}
/**
     * @出自类 Character
*/
getObjectId(){}
/**
     * @出自类 Character
*/
getRemainingSp(){}
/**
     * @出自类 Character
*/
getBattleshipHP(){}
/**
     * @出自类 Character
*/
getMapleGuildCharacter(){}
/**
     * @出自类 Character
*/
setName(name: String){}
/**
     * @出自类 Character
*/
showInfo(caption: String, pink: number, msg: String){}
/**
     * @出自类 Character
*/
get商城_抵用券(){}
/**
     * 增加在线时间
     * @出自类 Character
     */
gainGamePoints(amount: number){}
/**
     * @出自类 Character
*/
getAlpha(){}
/*
     * 检测角色背包和身上的复制装备信息
     * 如果发现直接删除装备
     * @出自类 Character
     */
checkCopyItems(){}
/**
     * @出自类 Character
*/
setCoconutteam(coconutteam: number){}
/**
     * @出自类 Character
*/
setJobStats(jobStats: any){}
/**
     * @出自类 Character
*/
getFollowId(){}
/**
     * @出自类 Character
*/
set商城_抵用券(商城_抵用券: number){}
/**
     * @出自类 Character
*/
getDragon(){}
/**
     * @出自类 Character
*/
setBuddyCapacity(capacity: number){}
/**
     * @出自类 Character
*/
get飞行技能重生次数(){}
/**
     * @出自类 Character
*/
get商城_积分点数(){}
/**
     * @出自类 Character
*/
getHyPay(type: number){}
/**
     * @出自类 Character
*/
setTail(tail: number){}
/**
     * @出自类 Character
*/
levelUp(){}
/**
     * @出自类 Character
*/
cancelMorphs(){}
/**
     * 单纯用来对接API类，方便操作
     * @出自类 Character
     */
setAPI(API: AbstractPlayerInteraction){}
/**
     * @出自类 Character
*/
getClones(){}
/**
     * @出自类 Character
*/
setPoints(points: number){}
/**
     * @出自类 Character
*/
setRemainingAp(remainingAp: number){}
/**
     * @出自类 Character
*/
silentEnforceMaxHpMp(){}
/**
     * @出自类 Character
*/
getTrade(){}
/**
     * @出自类 Character
*/
setNumClones(numClones: number){}
/**
     * @出自类 Character
*/
setLoginTime(loginTime: number){}
/**
     * @出自类 Character
*/
get橙色血条(){}
/**
     * @出自类 Character
*/
showMessage(type: number, msg: String){}
/**
     * @出自类 Character
*/
getMarriageId(){}
/**
     * @出自类 Character
*/
getExp(){}
/**
     * @出自类 Character
*/
setChair(chair: number){}
/**
     * @出自类 Character
*/
getSummonPoint(skillId: number){}
/**
     * @出自类 Character
*/
setRemainingSp(remainingSp: number, skillbook: number){}
/**
     * @出自类 Character
*/
getTotalLosses(){}
/**
     * @出自类 Character
*/
getTrait(t: any){}
/**
     * @出自类 Character
*/
getHair(){}
/**
     * @出自类 Character
*/
setAvailableCP(availableCP: number){}
/**
     * @出自类 Character
*/
getTotalWins(){}
/**
     * @出自类 Character
*/
add敛财术数量(count: number){}
/**
     * @出自类 Character
*/
gainHonorExp(amount: number, show: number){}
/**
     * @出自类 Character
*/
checkTalking(){}
/**
     * @出自类 Character
*/
enforceMaxHpMp(){}
/**
     * @出自类 Character
*/
setFace(face: number){}
/**
     * @出自类 Character
*/
getGachexp(){}
/**
     * @出自类 Character
*/
setShop(shop: any){}
/**
     * @出自类 Character
*/
addTownPortal(door: any){}
/**
     * @出自类 Character
*/
get天堂紫血(){}
/**
     * @出自类 Character
*/
setExp(exp: number){}
/**
     * @出自类 Character
*/
receivePartyMemberHP(){}
/**
     * @出自类 Character
*/
setJobRank(jobRank: number){}
/**
     * @出自类 Character
*/
getSecondFace(){}
/**
     * @出自类 Character
*/
cloneLooks(){return new Character() }
/**
     * @出自类 Character
*/
get精灵的祝福来源(){}
/**
     * @出自类 Character
*/
get装备特效开关(){}
/**
     * @出自类 Character
*/
getVpoints(){}
/**
     * @出自类 Character
*/
getVisibleMapObjectsLock(){}
/**
     * @出自类 Character
*/
isHidden(){}
/**
     * @出自类 Character
*/
getLastCombo(){}
/**
     * @出自类 Character
*/
deleteNote(id: number, fame: number){}
/**
     * @出自类 Character
*/
addNewAtom(skillid: number, createtime: number, type: number, remote: number){}
/**
     * @出自类 Character
*/
gainDPoints(amount: number){}
/**
     * @出自类 Character
*/
gainPlayerPoints(gain: number){}
/**
     * @出自类 Character
*/
setDpoints(dpoints: number){}
/**
     * @出自类 Character
*/
setJobRankMove(jobRankMove: number){}
/**
     * @出自类 Character
*/
set交易类型(交易类型: number){}
/**
     * @出自类 Character
*/
setBattleshipHP(battleshipHP: number){}
/**
     * @出自类 Character
*/
checkFollow(){}
/**
     * @出自类 Character
*/
setFollowOn(followOn: number){}
/**
     * @出自类 Character
*/
getForceAtomIndex(){}
/**
     * @出自类 Character
*/
addFame(famechange: number){}
/**
     * @出自类 Character
*/
setInitialSpawnPoint(initialSpawnPoint: number){}
/**
     * @出自类 Character
*/
自动解卡(){}
/**
     * @出自类 Character
*/
setMinigame(minigame: any){}
/**
     * @出自类 Character
*/
getAllianceRank(){}
/**
     * @出自类 Character
*/
set药剂罐(药剂罐: any){}
/**
     * @出自类 Character
*/
gainSp(sp: number){}
/**
     * @出自类 Character
*/
getMoveAction(){}
/**
     * @出自类 Character
*/
getGamePoints(){}
/**
     * @出自类 Character
*/
getClient(){}
/**
     * @出自类 Character
*/
getRemainingSpSize(){}
/**
     * @出自类 Character
*/
getAngel(){}
/**
     * @出自类 Character
*/
getCRand(){}
/**
     * @出自类 Character
*/
set烟雾攻击坐标(烟雾攻击坐标: any){}
/**
     * @出自类 Character
*/
getHonourExp(){}
/**
     * @出自类 Character
*/
getReviveCount(){}
/**
     * @出自类 Character
*/
unlockSummonsReadLock(){}
/**
     * @出自类 Character
*/
getCurrentTime(){}
/**
     * @出自类 Character
*/
set钢铁之躯叠加(钢铁之躯叠加: number){}
/**
     * @出自类 Character
*/
setMarriageItemId(marriageItemId: number){}
/**
     * @出自类 Character
*/
removeAndroid(){}
/**
     * @出自类 Character
*/
getPyramidSubway(){}
/**
     * @出自类 Character
*/
guildUpdate(){}
/**
     * @出自类 Character
*/
addCP(ammount: number){}
/**
     * @出自类 Character
*/
getMapStats(){}
/**
     * @出自类 Character
*/
setPlayerPoints(playerPoints: number){}
/**
     * @出自类 Character
*/
set神之子脸型(性别: number, face: number, secondFace: number){}
/**
     * @出自类 Character
*/
gainAp(ap: number){}
/**
     * @出自类 Character
*/
getTownPortal(){}
/**
     * @出自类 Character
*/
setMoveAction(moveAction: number){}
/**
     * @出自类 Character
*/
set祝福盔甲time(祝福盔甲time: number){}
/**
     * @出自类 Character
*/
setForceAtomIndex(forceAtomIndex: number){}
/**
     * @出自类 Character
*/
get祝福盔甲time(){}
/*
     * 双倍爆率卡
     * @出自类 Character
     */
hasDropCard(){}
/**
     * @出自类 Character
*/
getShop(){}
/**
     * @出自类 Character
*/
getRemainingSp(skillbook: number){}
/**
     * @出自类 Character
*/
get记录AIcid(){}
/**
     * @出自类 Character
*/
dropSpouseMessage(type: number, message: String){}
/**
     * @出自类 Character
*/
getName(){}
/**
     * @出自类 Character
*/
addOpenGate(door: any){}
/**
     * @出自类 Character
*/
set飞行技能重生次数(飞行技能重生次数: number){}
/**
     * @出自类 Character
*/
isStaff(){}
/**
     * @出自类 Character
*/
setClone(clone: number){}
/**
     * @出自类 Character
*/
getDevicetext(){}
/**
     * @出自类 Character
*/
set禁言(禁言: number){}
/**
     * @出自类 Character
*/
updatePickPocket(reload: number){}
/**
     * 检测

     *

     * @return
     * @出自类 Character
     */
device(){}
/**
     * @出自类 Character
*/
allowedToTarget(other: Character){}
/**
     * @出自类 Character
*/
setAccountId(accountId: number){}
/**
     * @出自类 Character
*/
getLastMonsterCombo(){}
/**
     * @出自类 Character
*/
getDamageIncrease(lm: number){}
/**
     * @出自类 Character
*/
getAvatarStats(){}
/**
     * @出自类 Character
*/
setLastCombo(lastCombo: number){}
/**
     * @出自类 Character
*/
get商城_点券(){}
/**
     * @出自类 Character
*/
getGuildRank(){}
/**
     * @出自类 Character
*/
set缩放人物时间(缩放人物时间: number){}
/**
     * @出自类 Character
*/
getFame(){}
/**
     * @出自类 Character
*/
setChalktext(chalktext: String){}
/**
     * @出自类 Character
*/
set橙色血条(橙色血条: number){}
/**
     * @出自类 Character
*/
setHpApUsed(hpApUsed: number){}
/**
     * @出自类 Character
*/
getJobStats(ignored: any){}
/**
     * @出自类 Character
*/
updateReviveCount(){}
/**
     * @出自类 Character
*/
getSummonsReadLock(){}
/**
     * @出自类 Character
*/
isSkipOnceChat(){}
/**
     * @出自类 Character
*/
getSkillPet(){}
/**
     * @出自类 Character
*/
scheduleRemoveSummon(sum: any, localDurations: number){}
/**
     * @出自类 Character
*/
isGM(){}
/**
     * @出自类 Character
*/
gainVPoints(amount: number){}
/**
     * @出自类 Character
*/
reloadAllFamiliars(){}
/**
     * @出自类 Character
*/
isFollowOn(){}
/**
     * @出自类 Character
*/
cheakSkipOnceChat(){}
/**
     * @出自类 Character
*/
sendNote(to: String, msg: String){}
/**
     * @出自类 Character
*/
setRank(rank: number){}
/**
     * @出自类 Character
*/
getAccountName(){}
/**
     * @出自类 Character
*/
getEpoints(){}
/**
     * @出自类 Character
*/
removeSummon(summon: any, animated: number){}
/**
     * @出自类 Character
*/
set女皇的祝福来源(女皇的祝福来源: String){}
/**
     * @出自类 Character
*/
addWreckages(wre: any){}
/**
     * 是否处于对话中，防止多次对话掉线
     * @出自类 Character
     */
set正在对话中(正在对话中: number){}
/**
     * @出自类 Character
*/
getLoginTime(){}
/**
     * @出自类 Character
*/
set天堂紫血(天堂紫血: number){}
/**
     * @出自类 Character
*/
setPyramidSubway(pyramidSubway: any){}
/**
     * @出自类 Character
*/
canGiveFame(from: Character){}
/**
     * @出自类 Character
*/
setTrade(trade: any){}
/**
     * @出自类 Character
*/
getFace(){}
/**
     * @出自类 Character
*/
setVipTime(period: number){}
/**
     * @出自类 Character
*/
getRemainingSps(){}
/**
     * @出自类 Character
*/
getTeam(){}
/**
     * @出自类 Character
*/
setMarriageId(marriageId: number){}
/**
     * @出自类 Character
*/
clearLinkMid(){}
/**
     * @出自类 Character
*/
setTotalCP(totalCP: number){}
/**
     * @出自类 Character
*/
setLastHPTime(lastHPTime: number){}
/**
     * @出自类 Character
*/
getSummonedFamiliar(){}
/**
     * Convenience function which adds the supplied parameter to the current hp

     * then directly does a updateSingleStat.

     *

     * @param delta

     * @see Character#getBaseStats().setHp(int)
     * @出自类 Character
     */
addHP(delta: number){}
/**
     * @出自类 Character
*/
setRps(rps: any){}
/**
     * @出自类 Character
*/
setLevel(level: number){}
/**
     * @出自类 Character
*/
getSummonsLock(){}
/**
     * @出自类 Character
*/
modifyDamageTaken(damage: number, attacke: any){}
/**
     * 获取此技能下的所有的召唤兽oid

     *

     * @param skillId

     * @return
     * @出自类 Character
     */
getListSummonObjectId(skillId: number){}
/**
     * @出自类 Character
*/
setNextConsume(nextConsume: number){}
/**
     * @出自类 Character
*/
getWorld(){}
/**
     * @出自类 Character
*/
setInvincible(invinc: number){}
/**
     * @出自类 Character
*/
makeDragon(){}
/**
     * @出自类 Character
*/
get钢铁之躯叠加(){}
/**
     * @出自类 Character
*/
isClone(){}
/**
     * @出自类 Character
*/
getChatSession(){}
/**
     * @出自类 Character
*/
getQuestStats(){}
/**
     * @出自类 Character
*/
setRankMove(rankMove: number){}
/**
     * @出自类 Character
*/
setScrolledPosition(scrolledPosition: number){}
/**
     * @出自类 Character
*/
saveGuildStatus(){}
/**
     * @出自类 Character
*/
set记录AIcid(记录AIcid: number){}
/**
     * @出自类 Character
*/
setOldPosition(oldPosition: any){}
/**
     * @出自类 Character
*/
setVip(vip: number){}
/**
     * @出自类 Character
*/
getRankMove(){}
/**
     * @出自类 Character
*/
getGuildId(){}
/**
     * @出自类 Character
*/
getControlledSize(){}
/**
     * @出自类 Character
*/
updateFame(){}
/**
     * @出自类 Character
*/
getTotalCP(){}
/**
     * @出自类 Character
*/
getCoreAura(){}
/**
     * @出自类 Character
*/
getId(){}
/**
     * @出自类 Character
*/
addSummon(s: any){}
/**
     * @出自类 Character
*/
set缩放人物大小(缩放人物大小: number){}
/**
     * 用于出入商城的时候记录原来所在的频道
     * @出自类 Character
     */
getFromChannel(){}
/**
     * @出自类 Character
*/
updatePartyMemberHP(){}
/**
     * @出自类 Character
*/
setParty(party: any){}
/**
     * @出自类 Character
*/
getBags(){}
/**
     * @出自类 Character
*/
getItemEffect(){}
/**
     * @出自类 Character
*/
getFirstLinkMid(){}
/**
     * @出自类 Character
*/
set商城_点券(商城_点券: number){}
/**
     * @出自类 Character
*/
set祝福盔甲CDtime(祝福盔甲CDtime: number){}
/**
     * @出自类 Character
*/
updateSingleStat(stat: any, newval: number){}
/**
     * @出自类 Character
*/
setSkillPet(skillPet: any){}
/**
     * @出自类 Character
*/
handleForceGain(oid: any, skillid: number, type: number, extraForce: number){}
/**
     * @出自类 Character
*/
setAngel(angel: any){}
/**
     * @出自类 Character
*/
setHonourExp(honourExp: number){}
/**
     * @出自类 Character
*/
getType(){}
/**
     * @出自类 Character
*/
schedule(key: String, scheduledFuture: any){}
/**
     * @出自类 Character
*/
setWorld(world: number){}
/**
     * @出自类 Character
*/
setMessenger(messenger: any){}
}
class EventManager {
// ============================ 结束相关 ============================
disposeInstance(name: String){}
/**
     * @出自类 EventManager
*/
unregisterPlayer(chr: Character){}
/**
     * @出自类 EventManager
*/
broadcastServerMsg(type: number, msg: String, weather: number){}
/**
     * @出自类 EventManager
*/
startInstance(party: any, map: MapleMap, maxLevel: number){}
/**
     * @出自类 EventManager
*/
getMobs(){}
/**
     * @出自类 EventManager
*/
restartEventTimer(time: number){}
/**
     * @出自类 EventManager
*/
registerParty(party: any, map: MapleMap){}
/**
     * @出自类 EventManager
*/
onPlayerRevived(chr: Character){}
/**
     * 停止所有定时任务
     * @出自类 EventManager
     */
cancelSchedlue(){}
/**
     * @出自类 EventManager
*/
restartEventTimer(time: number, inSecond: number){}
/**
     * @出自类 EventManager
*/
broadcastYellowMsg(msg: String){}
/**
     * @出自类 EventManager
*/
getMapInstance(args: number){return new MapleMap() }
/**
     * @出自类 EventManager
*/
onPlayerDisconnected(chr: Character, idz: number){}
/**
     * @出自类 EventManager
*/
schedule(methodName: String, delay: number){}
/**
     * @param keepSize 每轮保留的拼图数量

     * @param totalStage 轮数，范围是1~9

     * @param period 关卡前后的间隔时长，单位ms
     * @出自类 EventManager
     */
拼图大师_初始化(keepSize: number, totalStage: number, period: number){}
/**
     * 不同场景需要不同时钟效果

     *

     * @param time         单位毫秒

     * @param showInSecond 默认显示为 分秒
     * @出自类 EventManager
     */
showClockEffect(chr: Character, time: number, showInSecond: number){}
/**
     * @出自类 EventManager
*/
getProperties(){}
/**
     * @出自类 EventManager
*/
scheduleAtTimestamp(methodName: String, timestamp: number){}
/**
     * @出自类 EventManager
*/
disposeIfPlayerBelow(size: number, towarp: number, portal: number){}
/**
     * @出自类 EventManager
*/
getTimeLeft(){}
/**
     * @出自类 EventManager
*/
getIv(){}
/**
     * 从指定数值里随机抽取N个值

     *

     * @param arr   long[]

     * @param amout 目标数量，小于入参则不会重复，否则会重复

     * @return long[]
     * @出自类 EventManager
     */
randArray(arr: any, amout: number){}
// ============================ 事件接口 ============================
startInstance(){}
/**
     * @出自类 EventManager
*/
getName(){}
/**
     * @出自类 EventManager
*/
broadcastShip(mapId: number, effect: number){}
/**
     * 初始化痛苦迷宫

     *

     * @param style  0=绿色 1=红色

     * @param height

     * @param width
     * @出自类 EventManager
     */
initMaze(style: number, height: number, width: number){}
// ============================ 内部数据库 ============================
setProperty(key: String, value: String){}
// ============================ 怪物相关 ============================
registerMonster(mob: Monster){}
// ============================ 计时器 ============================
stopEventTimer(){}
/**
     * @出自类 EventManager
*/
disposeIfPlayerBelow(size: number, towarp: number){}
/**
     * @出自类 EventManager
*/
initPropArrayRandom(name: String, min: number, max: number, amount: number){}
/**
     * @出自类 EventManager
*/
startEventTimerInSecond(time: number){}
/**
     * @出自类 EventManager
*/
getMapFactoryMap(mapId: number){return new MapleMap() }
/**
     * @出自类 EventManager
*/
isTimerStarted(){}
/**
     * @出自类 EventManager
*/
broadcastServerMsg(msg: String){}
/**
     * @出自类 EventManager
*/
getChannel(){}
/**
     * @出自类 EventManager
*/
getMapIds(){}
/**
     * @出自类 EventManager
*/
getPlayerCount(){}
/**
     * @出自类 EventManager
*/
broadcastPlayerMsg(type: number, msg: String){}
/**
     * @出自类 EventManager
*/
onTimeOut(delay: number){}
/**
     * @出自类 EventManager
*/
onItemPickedUp(chr: Character, itemID: number){}
// =========================== 基础工具接口 ===============================
rand(min: number, max: number){}
/**
     * @出自类 EventManager
*/
startInstance(character: Character, leader: String){}
/**
     * @出自类 EventManager
*/
startInstance(party: any, map: MapleMap){}
/**
     * @出自类 EventManager
*/
onPartyDisbanded(){}
/**
     * @出自类 EventManager
*/
startEventTimer(time: number){}
// ============================ 地图相关 ============================
setInstanceMap(mapId: number){return new MapleMap() }
/**
     * 活动中角色杀死怪物触发事件

     *

     * @param chr

     * @param mob
     * @出自类 EventManager
     */
onMonsterKilled(chr: Character, mob: Monster){}
/**
     * @出自类 EventManager
*/
addNumberProperty(key: String, value: number){}
/**
     * @出自类 EventManager
*/
getProperty(key: String){}
// ============================ 玩家相关 ============================
warpAllPlayer(from: number, to: number){}
/**
     * @出自类 EventManager
*/
dispose(){}
/**
     * @出自类 EventManager
*/
onMonsterDamaged(chr: Character, mob: Monster, realDamage: number, attackDamage: number){}
/**
     * @出自类 EventManager
*/
startInstance(character: Character){}
/**
     * @出自类 EventManager
*/
getMonster(id: number){return new Monster() }
// ============================ 供脚本用的接口 ============================
getMapFactory(){}
/**
     * @出自类 EventManager
*/
乌鲁斯_更新分数(){}
/**
     * 从指定范围的数值里随机抽取N个值

     *

     * @param min   long

     * @param max   long

     * @param amout 目标数量，小于入参则不会重复，否则会重复

     * @return long[]
     * @出自类 EventManager
     */
randArray(min: number, max: number, amout: number){}
/**
     * @出自类 EventManager
*/
onPlayerKilled(chr: Character){}
/**
     * @出自类 EventManager
*/
getPlayers(){}
/**
     * @出自类 EventManager
*/
getDisconnected(){}
/**
     * @出自类 EventManager
*/
getNumberProperty(key: String){}
/**
     * @出自类 EventManager
*/
onMapChanged(chr: Character, mapId: number){}
/**
     * @出自类 EventManager
*/
unregisterMonster(mob: Monster){}
}
class MaplePortal {
/**
     * @出自类 MaplePortal
*/
setId(id: number){}
/**
     * @出自类 MaplePortal
*/
getTarget(){}
/**
     * @出自类 MaplePortal
*/
getPosition(){}
/**
     * @出自类 MaplePortal
*/
getTargetMapId(){}
/**
     * @出自类 MaplePortal
*/
getName(){}
/**
     * @出自类 MaplePortal
*/
setScriptName(scriptName: String){}
/**
     * @出自类 MaplePortal
*/
setTarget(target: String){}
/**
     * @出自类 MaplePortal
*/
setPosition(position: any){}
/**
     * @出自类 MaplePortal
*/
isPortalState(){}
/**
     * @出自类 MaplePortal
*/
getId(){}
/**
     * @出自类 MaplePortal
*/
setPortalState(portalState: number){}
/**
     * @出自类 MaplePortal
*/
getScriptName(){}
/**
     * @出自类 MaplePortal
*/
setName(name: String){}
/**
     * @出自类 MaplePortal
*/
setTargetMapId(targetMapId: number){}
/**
     * @出自类 MaplePortal
*/
getType(){}
/**
     * @出自类 MaplePortal
*/
enterPortal(c: any){}
}
class Monster {
/**
     * @出自类 Monster
*/
setInAttack(inAttack: number){}
/**
     * @出自类 Monster
*/
hasAttackOffCooldown(attackID: number){}
/**
     * 改变等级，并按比例上涨属性
     * 


     * 默认执行 1.5X强化

     *

     * @param newLevel
     * @出自类 Monster
     */
changeLevel(newLevel: number){}
/**
     * @出自类 Monster
*/
setHighestDamageChar(highestDamageChar: number){}
/**
     * @出自类 Monster
*/
getLastAttackTime(){}
/**
     * @出自类 Monster
*/
setLastAttackTime(lastAttackTime: number){}
/**
     * @出自类 Monster
*/
getAllBuffs(){}
/**
     * @出自类 Monster
*/
isDropsDisabled(){}
/**
     * 精英级别 
     * 


     * -1=普通 0=简单-黄色剑 1=普通-橙色剑 2=困难-红色剑
     * @出自类 Monster
     */
setEliteTier(eliteTier: number){}
/**
     * @出自类 Monster
*/
cancelSingleStatus(stat: any){}
/**
     * @出自类 Monster
*/
killBy(killer: Character, lastSkill: number){}
/**
     * @出自类 Monster
*/
registerKill(next: number){}
/**
     * @出自类 Monster
*/
getHighestDamageChar(){}
/**
     * @出自类 Monster
*/
applyMonsterBuff(effect: any, duration: number, skill: any, reflection: any){}
/**
     * @出自类 Monster
*/
putAttackOnCooldown(skillID: number, delayForNextAttack: number){}
     * @出自类 Monster
/* Anti KS */
isAttackedBy(chr: Character){}
/**
     * @出自类 Monster
*/
setLinkCID(linkCID: number){}
/**
     * @出自类 Monster
*/
getEffectiveness(e: any){}
/**
     * @出自类 Monster
*/
getEliteDropBonus(){}
/**
     * @出自类 Monster
*/
getSkillCooldowns(){}
/**
     * @出自类 Monster
*/
getBuffToGive(){}
/**
     * @出自类 Monster
*/
setHp(hp: number){}
/**
     * @出自类 Monster
*/
getName(){}
/**
     * @出自类 Monster
*/
getMobMaxMp(){}
/**
     * @出自类 Monster
*/
getMobLevel(){}
/**
     * @出自类 Monster
*/
damage(from: Character, damage: number, updateAttackTime: number, lastSkill: number){}
/**
     * @出自类 Monster
*/
getLinkCID(){}
/**
     * @出自类 Monster
*/
getSkillSize(){}
/**
     * @出自类 Monster
*/
damage(from: Character, damage: number, updateAttackTime: number, lastSkill: number, drop: number){}
/**
     * 无条件满血满魔
     * @出自类 Monster
     */
heal(){}
/**
     * @出自类 Monster
*/
getController(){return new Character() }
/**
     * @出自类 Monster
*/
hasSkillDelayExpired(){}
/**
     * @出自类 Monster
*/
getMp(){}
/**
     * 手动关联血条怪，目前用于黑龙脚本，必须为public
     * @出自类 Monster
     */
setDamageSpongeMob(mob: Monster){}
/**
     * @出自类 Monster
*/
setLinkOid(linkOid: number){}
/**
     * @出自类 Monster
*/
hasSkill(skillId: number, level: number){}
/**
     * @出自类 Monster
*/
setOverrideStats(ostats: any){}
/**
     * @出自类 Monster
*/
toString(){}
/**
     * @出自类 Monster
*/
hasSkillOffCooldown(skillID: number, slv: number){}
/**
     * @出自类 Monster
*/
hashCode(){}
/**
     * @出自类 Monster
*/
hashCode(){}
/*
     * 取消怪物BUFF状态
     * @出自类 Monster
     */
cancelStatus(stat: any){}
/**
     * @出自类 Monster
*/
setFake(fake: number){}
/**
     * @出自类 Monster
*/
getStati(){}
/**
     * @出自类 Monster
*/
sendStatus(client: any){}
/**
     * @出自类 Monster
*/
setControllerKnowsAboutAggro(controllerKnowsAboutAggro: number){}
/**
     * @出自类 Monster
*/
getLastNode(){}
/**
     * @出自类 Monster
*/
setLastDropTime(lastDropTime: number){}
/**
     * @出自类 Monster
*/
setDropsDisabled(dropsDisabled: number){}
/**
     * @出自类 Monster
*/
getAttackers(){}
/**
     * @出自类 Monster
*/
getMobExp(){}
/**
     * @出自类 Monster
*/
getEventInstance(){return new EventManager() }
/**
     * @出自类 Monster
*/
sendSpawnData(client: any){}
/**
     * Anti KS
     * @出自类 Monster
     */
getBelongsTo(){}
/**
     * @出自类 Monster
*/
getAttackers(){}
/**
     * @出自类 Monster
*/
setMap(map: MapleMap){}
/**
     * @出自类 Monster
*/
getNodePacket(){}
/**
     * @出自类 Monster
*/
setEventInstance(eventInstance: EventManager){}
/**
     * @出自类 Monster
*/
setStolen(stolen: number){}
/**
     * @出自类 Monster
*/
getHPPercent(){}
/**
     * @出自类 Monster
*/
killedMob(map: MapleMap, baseExp: number, mostDamage: number, lastSkill: number){}
/**
     * @出自类 Monster
*/
getStatusSourceID(status: any){}
/**
     * @出自类 Monster
*/
getMobMaxHp(){}
/**
     * @出自类 Monster
*/
setController(controller: Character){}
/**
     * @出自类 Monster
*/
shouldDrop(now: number){}
/**
     * 初始化属性变化数据，便于后续改动
     * @出自类 Monster
     */
setOverrideStats(){}
/**
     * @出自类 Monster
*/
setRectangles(rectangles: any){}
/**
     * @出自类 Monster
*/
handleDeadBound(type: number){}
/**
     * 精英怪的词缀列表，可以有很多个
     * @出自类 Monster
     */
getElitePrefixs(){}
/**
     * @出自类 Monster
*/
setTempEffectiveness(e: any, milli: number){}
/**
     * @出自类 Monster
*/
damage(from: Character, damage: number, updateAttackTime: number){}
/**
     * @出自类 Monster
*/
getBuff(status: any){}
/**
     * @出自类 Monster
*/
getNextKill(){}
/**
     * @出自类 Monster
*/
addEmpty(){}
/**
     * @出自类 Monster
*/
getRectangles(){}
/**
     * @出自类 Monster
*/
addDamage(from: Character, damage: number, updateAttackTime: number){}
/**
     * @出自类 Monster
*/
isInAttack(){}
/**
     * @出自类 Monster
*/
isControllerHasAggro(){}
/**
     * @出自类 Monster
*/
setTriangulation(triangulation: number){}
/**
     * @出自类 Monster
*/
dispelSkill(skillId: any){}
/**
     * @出自类 Monster
*/
doPoison(status: any, weakChr: any){}
/**
     * 精英级别 
     * 


     * -1=普通 0=简单-黄色剑 1=普通-橙色剑 2=困难-红色剑
     * @出自类 Monster
     */
getEliteTier(){}
/**
     * @出自类 Monster
*/
contains(chr: Character){}
/**
     * @出自类 Monster
*/
getMap(){return new MapleMap() }
/**
     * 为怪物随机添加前缀
     * @出自类 Monster
     */
addRandomElitePrefix(){}
/**
     * @出自类 Monster
*/
addDamage(from: Character, damage: number, updateAttackTime: number){}
/**
     * @出自类 Monster
*/
addDamage(from: Character, damage: number, updateAttackTime: number){}
/**
     * @出自类 Monster
*/
doDropItem(now: number){}
/**
     * @出自类 Monster
*/
getChangeTime(){}
/*
     * 玩家给怪物上BUFF
     * @出自类 Monster
     */
applyStatus(from: Character, status: any, poison: number, duration: number, checkboss: number, eff: any){}
/**
     * @出自类 Monster
*/
isFake(){}
/**
     * @出自类 Monster
*/
setCarnivalTeam(carnivalTeam: number){}
/**
     * @出自类 Monster
*/
equals(obj: any){}
/**
     * @出自类 Monster
*/
equals(obj: any){}
/**
     * 改变等级，并按比例上涨属性

     *

     * @param newLevel

     * @param pqMob    1.5X强化
     * @出自类 Monster
     */
changeLevel(newLevel: number, pqMob: number){}
/**
     * @出自类 Monster
*/
getSize(){}
/**
     * 精英怪的词缀列表，可以有很多个
     * @出自类 Monster
     */
setElitePrefixs(elitePrefixs: any){}
/**
     * @出自类 Monster
*/
getCanBelong(){}
/**
     * @出自类 Monster
*/
putSkillCooldown(skillID: number, slv: number, nextUseableTime: number){}
/**
     * @出自类 Monster
*/
switchController(newController: Character, immediateAggro: number){}
/**
     * @出自类 Monster
*/
getStats(){}
/**
     * @出自类 Monster
*/
setControllerHasAggro(controllerHasAggro: number){}
/**
     * 怪物死后生成其他怪物
     * @出自类 Monster
     */
spawnRevives(map: MapleMap){}
/**
     * @出自类 Monster
*/
killedMob(map: MapleMap, baseExp: number, mostDamage: number, lastSkill: number){}
/**
     * @出自类 Monster
*/
killedMob(map: MapleMap, baseExp: number, mostDamage: number, lastSkill: number){}
/**
     * @出自类 Monster
*/
setChangeTime(changeTime: number){}
/**
     * @出自类 Monster
*/
getLastDropTime(){}
/**
     * @出自类 Monster
*/
getSkillDelays(){}
/**
     * @出自类 Monster
*/
heal(hp: number, mp: number, broadcast: number){}
/**
     * @出自类 Monster
*/
setNextKill(nextKill: number){}
/**
     * @出自类 Monster
*/
killGainExp(killer: Character, lastSkill: number){}
/**
     * @出自类 Monster
*/
sendDestroyData(client: any){}
/**
     * @出自类 Monster
*/
getLinkOid(){}
/**
     * @出自类 Monster
*/
contains(chr: Character){}
/**
     * @出自类 Monster
*/
contains(chr: Character){}
/**
     * @出自类 Monster
*/
getCarnivalTeam(){}
/**
     * @出自类 Monster
*/
getStolen(){}
/**
     * @出自类 Monster
*/
isElite(){}
/**
     * @出自类 Monster
*/
shouldKill(now: number){}
/**
     * @出自类 Monster
*/
isFirstAttack(){}
/**
     * @出自类 Monster
*/
getSkills(){}
/**
     * Sets when a next skill can be used (in ms from current time).

     *

     * @param delay The delay until the next skill can be used
     * @出自类 Monster
     */
setSkillDelay(delay: number){}
/**
     * 替换怪物外观，出现于进化系统
     * @出自类 Monster
     */
setSkinMobId(skinMobId: number){}
/**
     * @出自类 Monster
*/
killed(){}
/**
     * @出自类 Monster
*/
setMp(mp: number){}
/**
     * @出自类 Monster
*/
setListener(listener: any){}
/**
     * @出自类 Monster
*/
isControllerKnowsAboutAggro(){}
/**
     * @出自类 Monster
*/
setSize(size: number){}
/**
     * 出场方式 
     * 


     * 0=不显示怪物名称 1=200%大小 2=100%（仅对精英首领有效） 其他/非有效前缀=普通淡入
     * @出自类 Monster
     */
setEliteEnterType(eliteEnterType: number){}
/**
     * 出场方式 
     * 


     * 0=不显示怪物名称 1=200%大小 2=100%（仅对精英首领有效） 其他/非有效前缀=普通淡入
     * @出自类 Monster
     */
getEliteEnterType(){}
/**
     * @出自类 Monster
*/
setElite(isElite: number){}
/**
     * @出自类 Monster
*/
getTriangulation(){}
/**
     * @出自类 Monster
*/
isBoss(){}
/**
     * @出自类 Monster
*/
setLastNode(lastNode: number){}
/**
     * @出自类 Monster
*/
isAlive(){}
/**
     * @出自类 Monster
*/
getStatiSize(){}
/**
     * 替换怪物外观，出现于进化系统
     * @出自类 Monster
     */
getSkinMobId(){}
/**
     * @出自类 Monster
*/
getAttackers(){}
/**
     * @出自类 Monster
*/
getAttackers(){}
/**
     * @出自类 Monster
*/
getAttacker(){return new Character() }
/**
     * @出自类 Monster
*/
getHp(){}
/**
     * @出自类 Monster
*/
applyStatus(from: Character, status: any, poison: number, duration: number, checkboss: number, eff: any){}
/**
     * @出自类 Monster
*/
getNextPossibleSkillTime(){}
/**
     * @出自类 Monster
*/
setNextPossibleSkillTime(nextPossibleSkillTime: number){}
/**
     * @出自类 Monster
*/
getChangedStats(){}
/**
     * @出自类 Monster
*/
isBuffed(status: any){}
/**
     * @出自类 Monster
*/
getAttackById(attackID: number){}
/**
     * @出自类 Monster
*/
getDamage(){}
/**
     * @出自类 Monster
*/
handleSteal(chr: Character){}
/**
     * @出自类 Monster
*/
setNodePacket(nodePacket: any){}
/**
     * @出自类 Monster
*/
getType(){}
/**
     * @出自类 Monster
*/
getDamage(){}
/**
     * @出自类 Monster
*/
getDamage(){}
}
class Reactor {
/**
     * @出自类 Reactor
*/
sendDestroyData(client: any){}
/**
     * @出自类 Reactor
*/
forceHitReactor(chr: Character, newState: number, x: number, y: number, stance: number){}
/**
     * @出自类 Reactor
*/
packetSpawnReactor(reactor: Reactor){}
/**
     * @出自类 Reactor
*/
getReactItem(){}
/**
     * @出自类 Reactor
*/
packetReactorLeaveField(reactor: Reactor){}
/**
     * 搬运型反应堆出现 启用=0/1 禁用=-1
     * @出自类 Reactor
     */
setEnableMove(enableMove: number){}
/**
     * @出自类 Reactor
*/
getMap(){return new MapleMap() }
/**
     * @出自类 Reactor
*/
setFacingDirection(facingDirection: number){}
/**
     * @出自类 Reactor
*/
getDelay(){}
/**
     * @出自类 Reactor
*/
toString(){}
/**
     * @出自类 Reactor
*/
isCustom(){}
/**
     * @出自类 Reactor
*/
getArea(){}
/**
     * @出自类 Reactor
*/
packetRemoveReactor(reactor: Reactor){}
/**
     * @出自类 Reactor
*/
getReactorId(){}
/**
     * @出自类 Reactor
*/
setDelay(delay: number){}
/**
     * 采集石头反应堆的动作

     *

     * @param action 动作

     * @param time   持续时间，单位毫秒
     * @出自类 Reactor
     */
packet反应堆_采集动作(cid: number, b1: number, action: number, time: number, v1: number, b2: number){}
/**
     * @出自类 Reactor
*/
packetTriggerReactor(chr: Character, reactor: Reactor, stance: number){}
/**
     * @出自类 Reactor
*/
hitReactor(charPos: number, stance: number, c: any){}
/**
     * @出自类 Reactor
*/
getTouch(){}
/**
     * @出自类 Reactor
*/
forceTrigger(){}
/**
     * @出自类 Reactor
*/
sendSpawnData(client: any){}
/**
     * @出自类 Reactor
*/
getState(){}
/**
     * 指定时间后自杀

     *

     * @param delay 单位ms
     * @出自类 Reactor
     */
delayedDestroyReactor(delay: number){}
/**
     * @出自类 Reactor
*/
getStats(){}
/**
     * @出自类 Reactor
*/
setTimerActive(timerActive: number){}
/**
     * @出自类 Reactor
*/
setCustom(custom: number){}
/**
     * @出自类 Reactor
*/
getReactorType(){}
/**
     * @出自类 Reactor
*/
forceStartReactor(c: any){}
/**
     * @出自类 Reactor
*/
delayedHitReactor(c: any, delay: number){}
/**
     * @出自类 Reactor
*/
getName(){}
/**
     * @出自类 Reactor
*/
isAlive(){}
/**
     * @出自类 Reactor
*/
setState(state: number){}
/**
     * @出自类 Reactor
*/
isTimerActive(){}
/**
     * @出自类 Reactor
*/
setName(name: String){}
/**
     * @出自类 Reactor
*/
setMap(map: MapleMap){}
/**
     * @出自类 Reactor
*/
forceHitReactor(chr: Character, newState: number){}
/**
     * @出自类 Reactor
*/
getFacingDirection(){}
/**
     * 要求客户端延迟指定时间后触发反应堆

     *

     * @param oid

     * @param time 延时，单位毫秒
     * @出自类 Reactor
     */
packet反应堆_要求延迟触发(oid: number, time: number){}
/**
     * @出自类 Reactor
*/
scheduleSetState(chr: Character, oldState: number, newState: number, delay: number){}
/**
     * @出自类 Reactor
*/
getType(){}
/**
     * @出自类 Reactor
*/
setAlive(alive: number){}
//hitReactor command for item-triggered reactors
hitReactor(c: any){}
/**
     * 搬运型反应堆出现 启用=0/1 禁用=-1
     * @出自类 Reactor
     */
getEnableMove(){}
}
class AbstractPlayerInteraction {
/**
     * @出自类 PetAPI
*/
gainClosenessAll(closeness: number){}
/**
     * 获取玩家修为点数
     * @出自类 修仙API
     */
getRepairXW(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevNoESC_Illus(text: String){}
/**
     * @出自类 MapAPI
*/
warp(map: number, portal: number){}
/**
     * 检查玩家目标任务是否进行中
     *
     * @param id 任务
     * @return
     * @出自类 QuestAPI
     */
isQuestActive(id: number){}
/**
     * 刷怪，指定等级
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param level 等级
     * @param pos 坐标 java.awt.Point(x,y)
     * @出自类 MonsterAPI
     */
spawnMobLevel(mobId: number, quantity: number, level: number, pos: any){}
/**
     * @出自类 QuestAPI
*/
getCharsFromQuestInfo(questId: number, key: String){}
/**
     * @出自类 QuestAPI
*/
setStringForQuestInfo(questId: number, key: String, num: any){}
/**
     * 获得物品名称
     *
     * @param id 物品
     * @return
     * @出自类 ItemAPI
     */
getItemName(id: number){}
/**
     * 地图左右晃动 抖动
     *
     * @param mapId 地图ID
     * @param nX    左
     * @param nY    右
     * @param tTerm 频率
     * @出自类 MovieEffectAPI
     */
userSetFieldFloating(mapId: number, nX: number, nY: number, tTerm: number){}
//【确定】
sendOk(text: String){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_领取猎龙奖励(){}
/**
     * 是否满足完成任务的条件
     *
     * @param id
     * @return
     * @出自类 QuestAPI
     */
canCompleteQuest(id: number){}
/**
     * @出自类 NpcAPI
*/
onViewOrHide(npcTag: String, bView: number, bViewNameTag: number){}
/**
     * @出自类 PlayerAPI
*/
AI加入队伍(chr: Character){}
/**
     * 在玩家当前地图发送全地图信息
     *
     * @param message 信息
     * @出自类 MessageAPI
     */
mapMessage(message: String){}
/**
     * 加载冒险岛英雄数据
     * @出自类 冒险岛英雄API
     */
showMapleHero(){}
/**
     * 神之子刷新女脸型
     *
     * @param 脸型ID
     * @出自类 PlayerAPI
     */
神之子刷新女脸型(脸型ID: number){}
/**
     * 获取指定地图内剩余怪物数量
     *
     * @param mapId 地图
     * @return
     * @出自类 MonsterAPI
     */
getMonsterCount(mapId: number){}
/**
     * 战神家教
     *
     * @param bSet          开关
     * @param nSkillID      跟随式技能
     * @param dwAbleFieldId 地图
     * @出自类 MovieEffectAPI
     */
onHireTutorById(bSet: number, nSkillID: number, dwAbleFieldId: number){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
setNumberForAccountQuestInfo(questId: number, key: String, val: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuS_Bottom(text: String, diffNPC: number){}
/**
     * 查询账号日志的记录次数，每日清空
     *
     * @param name 日志名称
     * @出自类 EventAPI
     */
getAccountLog(name: String){}
/**
     * 刷物品，指定剩余时间
     *
     * @param id       物品
     * @param quantity 数量
     * @param period   剩余时间，默认以天为单位
     * @param owner    拥有者
     * @出自类 ItemAPI
     */
gainItemPeriod(id: number, quantity: number, period: number, owner: String){}
/**
     * 跟NPC有关的未知操作，出现于蘑菇城 -----更新 165
     *
     * @param id NPC ID
     * @return
     * @出自类 NpcAPI
     */
playNpcEff(id: number){}
/**
     * 获得玩家的指定任务的状态
     *
     * @param id
     * @return 0=未开始 1=进行中 2=已结束
     * @出自类 QuestAPI
     */
getQuestStatus(id: number){}
/**
     * 刷物品
     *
     * @param id          物品
     * @param quantity    数量
     * @param randomStats 是否随机化属性
     * @param period      剩余时间，默认以天为单位
     * @param hours       剩余时间改为以小时为单位
     * @param 升级次数        提升装备的可升级次数
     * @param owner       拥有者
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, randomStats: number, period: number, hours: number, 升级次数: number, owner: String){}
/**
     * 刷物品，指定剩余时间
     *
     * @param id       物品
     * @param quantity 数量
     * @param period   剩余时间，默认以天为单位
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, period: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC_Bottom(text: String){}
/**
     * 半边显示黑屏
     *
     * @param b1 启用？
     * @param v1 不透明度？
     * @param v2 ？=0
     * @param v3 淡入时间？
     * @param 方向 0=左 1=右
     * @出自类 MovieEffectAPI
     */
fieldEffect_HalfScreenBlack(b1: number, v1: number, v2: number, v3: number, 方向: number){}
/**
     * @出自类 ScriptMessageAPI
*/
头发混染(text: String){}
/**
     * 设置Npc脚本
     *
     * @param npcTag
     * @param b1
     * @param scripts
     * @param params
     * @出自类 NpcAPI
     */
onSetNpcScript(npcTag: String, b1: number, scripts: any, params: any){}
/**
     * 获取系统设置的修为点数
     * @出自类 修仙API
     */
getRepairpointXT(ID: number){}
/**
     * 显示黑底标题，淡入并存在一段时间后淡出
     *
     * @see EffectTextParam
     * @出自类 MovieEffectAPI
     */
effect_Text(strs: any, nums: any){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 主题副本API
*/
克里塞_允许攀爬藤蔓(id: number, key: String, allow: number){}
/**
     * @出自类 PlayerAPI
*/
getPlayerPoints(){}
/**
     * @出自类 CashAPI
*/
useNebuliteGachapon(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrev_Illus(text: String){}
/**
     * 艾尔达瀑布小游戏，初始化
     * @出自类 黎曼API
     */
艾尔达瀑布_初始化(){}
/**
     * @出自类 PlayerAPI
*/
setRandomAvatar(args_all: number){}
/**
     * 未知新特效，狐狸谷等新副本出现
     * @出自类 MovieEffectAPI
     */
onNewSpecialEffect(type: number, args: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevNoESC_Illus(text: String, diffNPC: number){}
/**
     * @出自类 PartyAPI
*/
getCarnivalChallenge(chr: Character){}
/**
     * @出自类 ToolAPI
*/
rand(min: number, max: number){}
/**
     * @出自类 PlayerAPI
*/
getDPoints(){}
/**
     * 账号下所有的联盟卡数量总和
     * @出自类 冒险岛联盟API
     */
get角色卡数量总和(){}
/**
     * 控制之神更新UI参数
     *
     * @param 类型
     * @param 动作
     * @param 总时间
     * @param 零
     * @param 剩余时间
     * @param 关联任务ID
     * @出自类 UserInterfaceAPI
     */
updateHeaderUI(类型: number, 动作: number, 总时间: number, 零: number, 剩余时间: number, 关联任务ID: number){}
/**
     * 获得玩家当前职业ID
     * @出自类 JobAPI
     */
getJob(){}
/**
     * 日冕活动，技能菜单
     * @出自类 V167日冕API
     */
coronaSkillMenu(v1: number, v2: number, v3: number, v4: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC_Illus(text: String, diffNPC: number){}
/**
     * V170 鬼怪夜市 开始金币哗啦啦撒币活动
     * @出自类 V170鬼怪夜市API
     */
金币哗啦啦(){}
/**
     * @出自类 NpcAPI
*/
npc_SetSpecialAction(npcid: number, action: String){}
/**
     * 清空玩家日志的次数记录
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
resetPlayerLog(name: String, type: number){}
/**
     * @出自类 QuestAPI
*/
setNumberForQuestCustomData(quest: number, data: number){}
/**
     * @出自类 PartyAPI
*/
buffGuild(buff: number, duration: number, msg: String){}
/**
     * 从指定范围的数值里随机抽取N个值
     *
     * @param min   long
     * @param max   long
     * @param amout 目标数量，小于入参则不会重复，否则会重复
     * @return long[]
     * @出自类 ToolAPI
     */
randArray(min: number, max: number, amout: number){}
/**
     * @出自类 主题副本API
*/
克里蒂亚斯_升级逆转法典(exp: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNormalTalk_Bottom(text: String, style: number, diffNPC: number, prev: number, next: number){}
/**
     * 取消技能BUFF
     *
     * @param skillId
     * @出自类 SkillAPI
     */
dispelBuff(skillId: number){}
/**
     * 学会技能
     *
     * @param skillId    技能
     * @param skilllevel 等级
     * @出自类 SkillAPI
     */
teachSkill(skillId: number, skilllevel: number){}
/**
     * @出自类 版本活动API
*/
技能跟随队友(npc: number, skill: number, mode: number){}
/**
     * 检查是否有团队成员超过了指定玩家日志[PlayerLog]的次数上限
     *
     * @param name  日志名称，并且选择每日清空类型
     * @param times 次数上限
     * @return 不满足要求的队友的名称列表
     * @出自类 EventAPI
     */
party_CheckFailed_PlayerLog(name: String, times: number){}
/**
     * @出自类 MissionAPI
*/
MissionGetFinish(charid: number, missionid: number){}
/**
     * @出自类 JobAPI
*/
神之子_完成剧情任务(){}
/**
     * @出自类 PartyAPI
*/
getNextCarnivalRequest(){}
/**
     * 荣耀活动，不稳定边界，设置飞船属性
     *
     * @param kills     满120爆发
     * @param ultraMode 爆发时没有类型限制
     * @param interval  充能间隔？
     * @param type      1=附加速度信息 0=无
     * @param speed
     * @出自类 V168荣耀API
     */
unstableBorderSetData(kills: number, ultraMode: number, interval: number, type: number, speed: number){}
/**
     * @出自类 CashAPI
*/
setViptime(time: number){}
/**
     * @出自类 MonsterAPI
*/
spawnMonster(id: number, qty: number, hp: number, pos: any){}
/**
     * 获取脚本的【整数】类型的值
     *
     * @param text 对话内容
     * @出自类 ScriptMessageAPI
     */
askNumber(text: String){}
/**
     * 穿戴装备，出现于蘑菇城剧情
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_ChangeEquipment(values: any){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNormalTalk(text: String, style: number, diffNPC: number, prev: number, next: number, autoSkipTime: number){}
/**
     * 随机加载精选立绘
     *
     * @return [NPC ID, face]
     * @出自类 ScriptMessageAPI
     */
getRandom立绘(){}
/**
     * @出自类 MonsterAPI
*/
spawnMonster(id: number){}
/**
     * 戴米安墓碑
     * @出自类 MapAPI
     */
戴米安墓碑(){}
/**
     * @出自类 PlayerAPI
*/
getSubcategory(){}
/**
     * @出自类 QuestAPI
*/
forceCompleteQuest(){}
/**
     * 出现于莫奈德Act3 朱丽埃塔BOSS战 建筑物坍塌
     * @出自类 MapEffectAPI
     */
地图特效_开关落脚点(object: any, action: any){}
/**
     * @出自类 MapEffectAPI
*/
onSetMapTagedObjectVisibleSchedule(count: number, name: String, value: number, interval: number, delay: number){}
/**
     * 根据当前经验倍率，获取指定经验值
     * @出自类 PlayerAPI
     */
gainExpR(exp: number){}
/**
     * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
     * @出自类 SkillAPI
     */
gainSkillBuff(skill: number){}
/**
     * 泰捏布里斯，痛苦迷宫，点燃蜡烛
     *
     * @param v1
     * @param v2
     * @param v3
     * @param v4
     * @param v5
     * @return
     * @出自类 痛苦迷宫API
     */
lightUpCandle(v1: number, v2: number, v3: number, v4: number, v5: number){}
/**
     * 氛围/暴雪 相关
     *
     * @param text
     * @param value0
     * @param value1
     * @出自类 MovieEffectAPI
     */
setAmbience(text: String, value0: number, value1: number){}
/**
     * 屏幕中间显示文字的对话方式，要玩家触发
     *
     * @param text          文本
     * @param doNewDialogue 0=和上一次Monologue处于同一次对话 1=开启新对话，清理之前内容
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_Monologue(text: String, doNewDialogue: number){}
/**
     * 查询玩家日志的记录次数，会每日清空，一般用于BOSS战斗次数限制
     *
     * @param name 日志名称
     * @出自类 EventAPI
     */
getPlayerLog(name: String){}
/**
     * @出自类 NPCConversationManager
*/
getType(){}
/**
     * @出自类 NpcAPI
*/
disableNPC(ids: any){}
/**
     * @出自类 PyramidAPI
*/
bonus_PyramidSubway(pyramid: number){}
/**
     * @出自类 PlayerAPI
*/
getMeso(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkSNoESC_Bottom(text: String){}
/**
     * 适用于强化失败后恢复装备
     * @出自类 JobAPI
     */
zeroRestoreWeapon(){}
/**
     * @出自类 MapEffectAPI
*/
Hidden_background(str: String, type: number, on: number, v1: number, v2: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC(text: String){}
/**
     * @出自类 MapAPI
*/
obstacleFallRepeat(count: number, typeMin: String, typeMax: String, delay: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber(text: String, defaultNumber: number, min: number, max: number){}
/**
     * 镜世界副本，更新地图
     *
     * @param type
     * @param count
     * @param maps
     * @出自类 镜世界API
     */
updateMirrorDungeonMap(type: number, count: number, maps: any){}
/**
     * 传送到指定地点
     *
     * @param map    地图
     * @param portal 传送门的名称
     * @出自类 MapAPI
     */
warp(map: number, portal: String){}
/**
     * 改变NPC的颜色
     *
     * @param v1
     * @param R
     * @param G
     * @param B
     * @param alpha
     * @param v6    ?=0
     * @param npc
     * @出自类 MovieEffectAPI
     */
fieldEffect_BackgroundCanvas(v1: number, R: number, G: number, B: number, alpha: number, v6: number, npc: number){}
/**
     * 右下角弹窗通知，可以任意调用，自动淡入淡出
     *
     * @param id   NPCID,0=玩家
     * @param time 持续时间，单位毫秒
     * @param text 说话内容
     * @出自类 MessageAPI
     */
addPopupSay(id: number, time: number, text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrev_Illus(text: String){}
/**
     * 设置玩家修为等级
     * @出自类 修仙API
     */
addPlayeramuont(){}
/**
     * @出自类 ItemAPI
*/
canHoldSlots(slot: number){}
/**
     * 随机获取一个伤害皮肤道具
     * @出自类 ItemAPI
     */
getRandomDamageSkin(){}
/**
     * @出自类 PartyAPI
*/
party_CheckFailed_Job(job: number){}
/**
     * @出自类 PlayerAPI
*/
刷新HP基址(num: number){}
/**
     * 检查玩家当前职业是否匹配对应转职数，比如1转、2转……
     * @出自类 JobAPI
     */
匹配转职数(转数: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_SetObjectState(broadcast: number, path: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askText_Bottom(text: String, defaultText: String, npc: number, minLen: number, maxLen: number, style: number, bottomSytle: number){}
/**
     * @出自类 MonsterAPI
*/
spawnMobStats(mobId: number, newhp: number, newExp: number){}
/**
     * 刷物品，指定剩余时间
     *
     * @param id       物品
     * @param quantity 数量
     * @param period   剩余时间，默认以天为单位
     * @param hours    剩余时间改为以小时为单位
     * @出自类 ItemAPI
     */
gainItemPeriod(id: number, quantity: number, period: number, hours: number){}
/**
     * 限定数量刷怪
     * @出自类 MonsterAPI
     */
spawnMobLimit(id: number, 数量: number, x: number, y: number, 地图内刷怪上限: number){}
/**
     * 打开仓库
     * @出自类 NpcAPI
     */
sendStorage(){}
/**
     * @出自类 MissionAPI
*/
MissionGetMaxNum(charid: number, missionid: number, mobid: number){}
/**
     * 冒险岛英雄 act2 遗迹逃亡，沙堆升高
     *
     * @param action
     * @param speed
     * @param y
     * @出自类 冒险岛英雄API
     */
mapleHeroSandRising(action: number, speed: number, y: number){}
/**
     * NPC体型变化
     *
     * @param npcTag
     * @param value0
     * @param value1
     * @出自类 NpcAPI
     */
npcSetSize(npcTag: String, value0: number, value1: number){}
/**
     * 触发道具的自带特效
     *
     * @param item
     * @出自类 MovieEffectAPI
     */
effect_Item(item: number){}
/**
     * 神之子读书结果
     *
     * @param v1
     * @param v2
     * @param v3
     * @param text
     * @param npc
     * @param v4
     * @param s1
     * @param s2
     * @出自类 JobAPI
     */
zeroReadBookResult(v1: number, v2: number, v3: number, text: String, npc: number, v4: number, s1: number, s2: number){}
/**
     * 显示横幅
     *
     * @param show   0=显示
     * @param itemId 不一定真的是道具
     * @param msg    文本
     * @param time   单位 秒
     * @param b2     ?
     * @出自类 MapEffectAPI
     */
showMapEffect(show: number, itemId: number, msg: String, time: number, b2: number){}
/**
     * @出自类 PlayerAPI
*/
gainMeso(gain: number, show: number, inChat: number){}
/**
     * 设置地图内指定物体的状态
     *
     * @param v1 ID?
     * @param v3 状态？
     * @出自类 MapEffectAPI
     */
onSetMapTagedObjectVisible(v1: number, name: String, v3: number){}
/**
     * 检查玩家目标任务是否已完成
     *
     * @param id 任务
     * @return
     * @出自类 QuestAPI
     */
isQuestFinished(id: number){}
/**
     * 移除指定地图的指定NPC。会在地图重置、重载后重新出现。
     *
     * @param mapId 地图
     * @param npcId
     * @出自类 NpcAPI
     */
removeNpc(mapId: number, npcId: number){}
/**
     * @出自类 SkillAPI
*/
getSkillLevel(skillId: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNormalTalk_Bottom(text: String, style: number, diffNPC: number, prev: number, next: number, bottomSytle: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAndroid(text: String, npc: number, card: number, styles: any){}
/**
     * @出自类 起源之塔API
*/
起源之塔_更新记录(end: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuSNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 荣耀活动，更新活动UI信息，海岸峭壁之战_阻截登陆
     *
     * @param type   游戏类型？
     * @param action 2=开始 3=结束
     * @param total  总时间
     * @param v3
     * @param cur    当前时间
     * @param quest  关联任务
     * @出自类 V168荣耀API
     */
gloryEventUIUpdate(type: number, action: number, total: number, v3: number, cur: number, quest: number){}
/**
     * 账号下所有的联盟卡角色等级总和
     * @出自类 冒险岛联盟API
     */
get角色卡等级总和(){}
/**
     * @出自类 V172新复古API
*/
新复古王国_溜冰(){}
/**
     * @出自类 MapAPI
*/
warp(map: MapleMap, point: any){}
/**
     * @出自类 PlayerAPI
*/
修改能力属性(类型: number, num: number){}
/**
     * 检查是否有团队成员超过了指定账号日志[AccountLog]的次数上限
     *
     * @param name  日志名称，并且选择每日清空类型
     * @param times 次数上限
     * @param type  日志类型，0=永久 other=记录保存时间
     * @return 不满足要求的队友的名称列表
     * @出自类 EventAPI
     */
party_CheckFailed_AccountLog(name: String, times: number, type: number){}
/**
     * 读取当前玩家公会的点数
     *
     * @return
     * @出自类 PlayerAPI
     */
getGP(){}
/**
     * @出自类 ToolAPI
*/
enableActions(){}
/**
     * @param opcodes 包头值
     * @param Text    包内容
     * @出自类 ToolAPI
     */
mplewPacket(opcodes: String, Text: String){}
/**
     * @出自类 ReactorActionManager
*/
dropItems(meso: number, mesoChance: number, minMeso: number, maxMeso: number, targetItems: number){}
/**
     * 改变由 npc_ChangeController() 控制的NPC的状态 
     * 

     *
     * @param npcTag  NPC的标签，用于区分多个相同ID。
     * @param action  动作，默认为 summon，具体的要看wz里的设置。
     * @param time    持续时间，单位 ms -1=永久
     * @param special 0=播放1次 1=循环播放
     * @出自类 NpcAPI
     */
npc_SetSpecialAction(npcTag: String, action: String, time: number, special: number){}
/**
     * @出自类 PlayerAPI
*/
resetStats(str: number, dex: number, z: number, luk: number){}
/**
     * 获取玩家充值的RMB
     *
     * @return
     * @出自类 CashAPI
     */
getRMB(){}
/**
     * @出自类 SkillAPI
*/
满剩余技能(){}
/**
     * @出自类 SkillAPI
*/
canUseSkillBook(skillId: number, masterLevel: number){}
/**
     * 增加玩家日志的次数记录，默认+1
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
addPlayerLog(name: String, type: number){}
/**
     * 获得玩家所在队伍
     *
     * @return
     * @出自类 PartyAPI
     */
getParty(){}
/**
     * 刷物品，指定剩余时间
     *
     * @param id       物品
     * @param quantity 数量
     * @param period   剩余时间，默认以天为单位
     * @param hours    剩余时间改为以小时为单位
     * @param owner    拥有者
     * @出自类 ItemAPI
     */
gainItemPeriod(id: number, quantity: number, period: number, hours: number, owner: String){}
/**
     * @出自类 ToolAPI
*/
genPortalScript(map: MapleMap){}
/**
     * [说明] --------< 魔方奇迹优惠 >-------- 
     * 

     * 魔方奇迹时间 (3) 
     * 

     * 潜能重置_B级升A级成功率提高 : 1000
     * 

     * 潜能重置_A级升S级成功率提高 : 500 
     * 

     * 潜能重置_S级升SS级成功率提高 : 100
     * @出自类 UserInterfaceAPI
     */
魔方奇迹时间_提示(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkS_Bottom(text: String, diffNPC: number){}
/**
     * 武陵道场切图和结算
     * @出自类 武陵道场API
     */
武陵道场_下一图(){}
/**
     * 触发使用物品效果
     *
     * @param id
     * @出自类 ItemAPI
     */
useItem(id: number){}
/**
     * 设置地图物体特效，出现于莫奈德、塔楼倒塌
     *
     * @param map
     * @param v1
     * @param action
     * @param v2
     * @出自类 MapEffectAPI
     */
onSetMapObjectCreateLayerMore(map: String, v1: number, action: String, v2: number){}
/**
     * @出自类 PartyAPI
*/
allMembersHere(){}
/**
     * @出自类 PlayerAPI
*/
reloadAllFamiliars(){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoSNoESC(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevS(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk_Illus(text: String, diffNPC: number){}
/**
     * @出自类 主题副本API
*/
岩壁巨人_上山之路_开始(){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoS_Bottom(text: String){}
/**
     * @出自类 ItemAPI
*/
getTotalStat(itemId: number){}
/**
     * @出自类 PartyAPI
*/
warpPartyWithExpMeso(mapId: number, exp: number, meso: number){}
/**
     * 人物移动到指定坐标
     * @出自类 PlayerAPI
     */
onTeleport(b1: number, b2: number, 玩家ID: number, x: number, y: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_屏幕渐入插图消失A(strs: any, nums: any){}
/**
     * 角色执行技能动作
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_OneTimeAction(action: number, time: number){}
/**
     * 0=普通版99 1=黄金版199 2=至尊版VIP499
     *
     * @return
     * @出自类 ToolAPI
     */
getzhizunvip(){}
/**
     * 塞尔提乌城墙，破坏攻城武器，停止
     * @出自类 V168荣耀API
     */
cerniumMagicBombStop(){}
/**
     * @出自类 PartyAPI
*/
createAlliance(alliancename: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC(text: String, diffNPC: number){}
/**
     * 荣耀活动_支援塞尔提乌_古书收集，开始 0=初入地图的初始化 1=开始护送 2=护送完成开始下一轮
     * @出自类 V168荣耀API
     */
cerniumProtectBookStart(state: number){}
/**
     * 召唤NPC，位于当前位置
     *
     * @param npcId
     * @出自类 NpcAPI
     */
spawnNpc(npcId: number){}
/**
     * @出自类 PlayerAPI
*/
getVPoints(){}
/**
     * 显示倒计时UI
     *
     * @param time 单位秒
     * @出自类 MovieEffectAPI
     */
getClock(time: number){}
/**
     * @出自类 ItemAPI
*/
dropItem(slot: number, invType: number, quantity: number){}
/**
     * 给玩家所在团队发点券
     *
     * @param amount 点券
     * @出自类 ItemAPI
     */
givePartyNX(amount: number){}
/**
     * 给玩家触发指定NPC的对话脚本
     *
     * @param npc  NPC的ID
     * @param mode 数值型子脚本，拼接成 npc_mode 的完整脚本
     * @出自类 NpcAPI
     */
openNpc(npc: number, mode: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevNoESC(text: String, diffNPC: number){}
/**
     * 中间公告-天气效果
     *
     * @param msg     内容
     * @param type    类型
     * @param time    持续时间
     * @param bForced
     * @出自类 MessageAPI
     */
getWeatherEffectNotice(msg: String, type: number, time: number, bForced: number){}
/**
     * 塞尔提乌城墙，阻止怪物海鸥，停止
     * @出自类 V168荣耀API
     */
cerniumBefenseBirdStop(){}
/**
     * @出自类 ItemAPI
*/
getItemQuantity(itemId: number, checkEquipped: number){}
/**
     * @出自类 MovieEffectAPI
*/
effect_GainExpGold(exp: number){}
/**
     * 获取转生次数
     * @出自类 修仙API
     */
getRepairquency(){}
/**
     * @出自类 PlayerAPI
*/
addPartyTrait(t: String, e: number, party: any){}
/**
     * 换职业
     *
     * @param job 职业ID
     * @出自类 JobAPI
     */
changeJob(job: number){}
/**
     * 移动平台
     *
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param n1
     * @param n2
     * @param r
     * @param start
     * @param speed
     * @param name
     * @出自类 MapEffectAPI
     */
dynamicObjMove(x1: number, y1: number, x2: number, y2: number, n1: number, n2: number, r: number, start: number, speed: number, name: String){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_解锁预设栏位(slot: number){}
/**
     * 查看玩家具体属性
     *
     * @param type 类型，支持：LVL, STR, DEX, INT, LUK, HP, MP, MAXHP, MAXMP, RAP,
     *             RSP, GID, GRANK, ARANK, GM, ADMIN, GENDER, FACE, HAIR
     * @return
     * @出自类 PlayerAPI
     */
getPlayerStat(type: String){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
addNumberForAccountQuestInfo(questId: number, key: String, diff: number, min: number, max: number){}
/**
     * 获取伺服务器经验倍率
     * @出自类 PlayerAPI
     */
getServerExpRate(){}
/**
     * 对应任务：39382 任务名称： [向导任务]能手册
     * @出自类 SkillAPI
     */
has4thSkillReach30(){}
/**
     * 显示换装界面，出现于好友故事
     *
     * @param v1
     * @param 服装道具
     * @param 消耗道具
     * @param v4
     * @出自类 好友故事API
     */
changeClothLook(v1: number, 服装道具: number, 消耗道具: number, v4: number){}
/**
     * 检查是否在自己家里
     * @出自类 我的小屋API
     */
isInMyHome(){}
/**
     * 荣耀活动_扫荡黑太阳_解救居民，魔法攻击B
     * @出自类 V168荣耀API
     */
cerniumSaveResidentMagicAttackB(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC(text: String, diffNpcID: number){}
/**
     * 获得点券
     *
     * @param type   类型，0=点券 1=抵用券
     * @param amount 数量，可正可负
     * @出自类 CashAPI
     */
gainNX(type: number, amount: number){}
/**
     * @出自类 SkillAPI
*/
更新美洲豹(id: number){}
/**
     * 冒险岛英雄 act3 变装小游戏
     * @出自类 冒险岛英雄API
     */
mapleHeroDressing(value0: number, value1: number, value2: number, value3: number){}
/**
     * 出现于啾啾岛，允许游泳
     *
     * @param v1
     * @param enable
     * @param actions
     * @出自类 MapEffectAPI
     */
allowSpecialAtion(v1: number, enable: number, actions: any){}
/**
     * 活动怪的特效
     * @出自类 MonsterAPI
     */
showCraftingEffect(effect: String, direction: number, time: number, mode: number){}
/**
     * 在玩家当前地图生成一个反应堆
     *
     * @param id 反应堆
     * @param x
     * @param y
     * @出自类 MapAPI
     */
spawnReactorOnGroundBelow(id: number, x: number, y: number){return new Reactor() }
/**
     * @出自类 ScriptMessageAPI
*/
askMenuSNoESC_Bottom(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Bottom(text: String, style: number, diffNPC: number){}
/**
     * 激活枪械模式
     * @出自类 杂项API
     */
onCreateGun(){}
/**
     * 塞尔提乌城墙_破坏攻城武器倒计时
     *
     * @param mode  0=开始 1=停止
     * @param cur   单位ms
     * @param total 单位ms
     * @出自类 V168荣耀API
     */
getClockCerniumBomb(mode: number, cur: number, total: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Bottom(text: String, style: number, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 MovieEffectAPI
*/
getClockSeconds(ms: number){}
/**
     * 设置玩家修为点数
     * @出自类 修仙API
     */
setRepairXW(number: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 一键扩充项链
     * @出自类 PlayerAPI
     */
一键扩充项链(days: number){}
/**
     * 使用建筑蓝图，蓝图ID = 地图ID的末位
     * @出自类 我的小屋API
     */
我的小屋_解锁房屋户型(item: number, name: String, blueprintStart: number, blueprintEnd: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevSNoESC(text: String){}
/**
     * @出自类 PartyAPI
*/
getCarnivalParty(){}
/**
     * 一键生成道具脚本
     * @出自类 ToolAPI
     */
genItemScript(start: number, end: number){}
/**
     * @出自类 PlayerAPI
*/
getExpNeededForLevel(level: number){}
/**
     * 更新武陵道场记录
     * @出自类 武陵道场API
     */
武陵道场_更新记录(){}
/**
     * @出自类 ItemAPI
*/
used(id: number, quantity: number){}
/**
     * 获得家族点数
     *
     * @param gp
     * @出自类 PlayerAPI
     */
gainGP(gp: number){}
/**
     * @出自类 MovieEffectAPI
*/
effect_唐云料理_火焰怪猎人(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAvatar(text: String, styles: any, card: number){}
/**
     * @出自类 PartyAPI
*/
endPartyQuest(amount: number, party: any){}
/**
     * @出自类 贝勒德API
*/
贝勒德_身体动作(name: String, points: any){}
/**
     * 反应堆脚本专用
     * @出自类 ReactorActionManager
     */
doHarvest(){}
/**
     * @出自类 ToolAPI
*/
enableActionsLight(){}
/**
     * @出自类 SkillAPI
*/
移除内面技能(skillId: number){}
/**
     * @出自类 MovieEffectAPI
*/
effect_Voice(data: String, value0: number){}
/**
     * @出自类 版本活动API
*/
eventSKill(v1: number, v2: number, b1: number, b2: number, v3: number, skill: number, b3: number, v4: number, v5: number, v6: number, v7: number, v8: number, cd: number, s1: number){}
/**
     * 传送玩家所在全地图人到指定地点
     *
     * @param portal 传送门
     * @出自类 MapAPI
     */
warpMap(mapId: number, portal: number){}
/**
     * 获取掉落倍率
     * @出自类 PlayerAPI
     */
getDropRate(){}
/**
     * 强制放弃任务
     * @出自类 QuestAPI
     */
forceForfeitQuest(){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoSNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 用于起源之塔第三关，左右平衡
     *
     * @param centerX
     * @出自类 起源之塔API
     */
起源之塔_均衡点数(centerX: number){}
/**
     * @出自类 PartyAPI
*/
disbandAlliance(){}
/**
     * @出自类 MissionAPI
*/
MissionAddMinNum(charid: number, missionid: number, num: number){}
/**
     * 获取累计充值金额
     *
     * @return
     * @出自类 CashAPI
     */
getTotalRMB(){}
/**
     * 移除玩家背包里指定位置的指定数量
     *
     * @param invType  背包页签类型
     * @param slot     格子位置
     * @param quantity 数量
     * @return
     * @出自类 ItemAPI
     */
removeSlot(invType: number, slot: number, quantity: number){}
/**
     * 我的小屋，获得访客数量
     * @出自类 我的小屋API
     */
getMyHomeVisitor(){}
/**
     * *
     * 解放内在能力效果
     * @出自类 QuestAPI
     */
showCompleteQuestEffect(){}
/**
     * @出自类 PlayerAPI
*/
解除角色死亡惩罚(){}
/**
     * 获得 MapleItemInformationProvider 实例
     *
     * @return
     * @出自类 ItemAPI
     */
getItemInfo(){}
/**
     * @出自类 MovieEffectAPI
*/
effect_NormalSpeechBalloon(data: String, borderStyle: number, colorStyle: number, nameHeight: number, time: number, v5: number, v6: number, v7: number, v8: number, v9: number, npcID: number, playerID: number){}
/**
     * 刷怪，指定血量魔量经验倍率
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param multipler 倍率
     * @出自类 MonsterAPI
     */
spawnMobMultipler(mobId: number, quantity: number, multipler: number){}
/**
     * @出自类 QuestAPI
*/
addNumberForQuestCustomData(quest: number, diff: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC_Bottom(text: String){}
/**
     * 给玩家播放视频。注意默认客户端里不包含全部视频，需要单独下载。
     *
     * @param data 视频文件名，不需要路径
     * @出自类 MovieEffectAPI
     */
playVideoByScript(data: String){}
/**
     * 过滤出有效脸型
     * @出自类 PlayerAPI
     */
filterValidFaces(faces: any){}
/**
     * 荣耀活动_扫荡黑太阳_摧毁传送门，加载大炮
     * @出自类 V168荣耀API
     */
cerniumCannonShow(id: number, v1: number, x: number, y: number){}
/**
     * 调试用，删除当前角色所有任务记录
     * @出自类 QuestAPI
     */
clearAllQuests(){}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
sendNext_Illus(text: String){}
/**
     * 获得指定地图实例
     * @出自类 MapAPI
     */
getMap(map: number){return new MapleMap() }
/**
     * @出自类 MessageAPI
*/
channelMessage(type: number, message: String){}
/**
     * @出自类 SkillAPI
*/
get内面技能列表(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkSNoESC(text: String){}
/**
     * @出自类 MessageAPI
*/
getTopMsgFont(msg: String, nFont: number, nFontSizeType: number, nFontColorType: number, nFadeOutDelay: number){}
/**
     * 异逝界，根据状态更新背景等通用效果
     * @出自类 异逝界API
     */
afterlandUpdateEnvironment(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 QuestAPI
*/
completeQuest(idd: number){}
/**
     * 移除由 npc_ChangeController() 控制的NPC
     *
     * @param npcTag NPC的标签，用于区分多个相同ID。
     * @see #npc_ChangeController(int npcid, String npcTag, int x, int y, int f)
     * @出自类 NpcAPI
     */
npc_LeaveField(npcTag: String){}
/**
     * 获得指定事件的EventManager
     *
     * @param event
     * @return
     * @出自类 EventAPI
     */
getEventManager(event: String){return new EventManager() }
/**
     * @出自类 凯梅尔兹航海API
*/
凯梅尔兹航海_每日刷新(){}
/**
     * @出自类 PlayerAPI
*/
setSkin(color: number){}
/**
     * @出自类 QuestAPI
*/
getStringFromQuestInfo(questId: number, key: String, value: String){}
/**
     * @出自类 MessageAPI
*/
topMsgBySoul(message: String){}
/**
     * 荣耀活动，支援塞尔提乌，解救骑士团，魔法师攻击
     * @出自类 V168荣耀API
     */
glorySaveKnightsAttack(action: number){}
/**
     * 穿戴装备
     *
     * @param itemId 道具ID
     * @param slot   背包位置
     * @出自类 PlayerAPI
     */
equip(itemId: number, slot: number){}
/**
     * @出自类 ToolAPI
*/
deleteCharacter(cid: number){}
/**
     * 冒险岛英雄里的拼图小游戏
     * @出自类 冒险岛英雄API
     */
mapleHeroJigsaw(v1: number, v2: number, v3: number, jigsaws: any){}
/**
     * @出自类 CashAPI
*/
敲敲乐奖励(rank: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 守卫城墙，更新HP
     *
     * @param hp
     * @出自类 赏金猎人API
     */
protectWallLife(hp: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo(text: String, style: number, diffNPC: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_Effect14(s1: String, b1: number, b2: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, faceLeft: number, canMove: number, forceSpawnNew: number){}
/**
     * @出自类 ToolAPI
*/
rand(nums: any){}
/**
     * 塞尔提乌城墙，闪电防御战，充能效果？
     * @出自类 V168荣耀API
     */
cerniumLightningDefense(){}
// 记录时间开始
MissionMake(charid: number, missionid: number, repeat: number, repeattime: number, lockmap: number, mobid: number){}
/**
     * @出自类 MissionAPI
*/
MissionSetMobId(charid: number, missionid: number, mobid: number){}
/**
     * @出自类 ReactorActionManager
*/
cancelHarvest(succ: number){}
/**
     * @出自类 PlayerAPI
*/
setPlayerPoints(gain: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNext_Bottom(text: String, diffNPC: number){}
/**
     * 塞尔提乌城墙，闪电防御战，闪电来袭+倒计时重置
     * @出自类 V168荣耀API
     */
cerniumLightningDefenseAttack(){}
/**
     * @出自类 V172新复古API
*/
新复古王国_获得点数(point: number){}
/**
     * 给玩家触发指定的对话脚本
     * 

     * NPCID=0，模式=0
     *
     * @param filename 加载 特殊/[filename].js
     * @出自类 NpcAPI
     */
openNpc(filename: String){}
/**
     * @出自类 MapEffectAPI
*/
onSetMapObjectCreateLayer(map: String, v1: number, v2: number, v3: number){}
/**
     * @param sql  脚本
     * @param args 每个列表，对应SQL表中的一列
     * @出自类 SqlAPI
     */
batchUpdateSQL(sql: String, args: any){}
/**
     * 荣耀活动_支援塞尔提乌_歼灭侦察队，结束
     * @出自类 V168荣耀API
     */
cerniumFindSpyStop(){}
/**
     * @出自类 PlayerAPI
*/
changeSubcategory(sub: number){}
/**
     * @出自类 MapAPI
*/
isAllReactorState(reactorId: number, state: number){}
/**
     * 神之子女发型
     *
     * @param 女发型ID
     * @出自类 PlayerAPI
     */
set神之子女发型(女发型ID: number){}
/**
     * 播放图片或动画，并且可以移动图片、长期存留、受控卸载
     * 

     * 图像优先级最高，覆盖所有UI
     *
     * @param tag       单次播放的唯一性标签，不可覆盖，直到取消
     * @param path      地址，比如 "Map/Effect2.img/kinesis/chaJay"
     * @param operation 0=生成，1=移动，2=消失
     * @param loadTime  淡入时间/移动时间
     * @param x         出场/移动X
     * @param y         出场/移动Y
     * @param value4
     * @param dimension 持续时间
     * @param value6
     * @出自类 MovieEffectAPI
     */
fieldEffect_ProcessOnOffLayer(tag: String, path: String, operation: number, loadTime: number, x: number, y: number, value4: number, dimension: number, value6: number, v7: number, b1: number, v8: number, v9: number){}
/**
     * @出自类 SqlAPI
*/
queryForObjectOrDefault(sql: String, requiredType: any, defaulValue: any, args: any){}
/**
     * 神之子切换
     * @出自类 JobAPI
     */
onZeroInfo(type: number){}
/**
     * 黎曼 上一百层 显示台阶
     *
     * @param names
     * @param shows
     * @param time  单位毫秒
     * @出自类 黎曼API
     */
upShowStepSchedule(names: any, shows: any, time: number){}
/**
     * 黑色天堂 act3 空战刷怪
     * 

     * LV1 2.5% 9300941
     * 

     * LV2 2.5% 9300941 9300942 9300944 9300950 9300951
     * 

     * LV3 5% 9300942 9300943 9300944 9300945 9300950 9300951 9300949
     * 

     * LV4 5% 9300943 9300945 9300946 9300950 9300951 9300949 9300952
     * 

     * @出自类 黑色天堂API
     */
黑色天堂_空战刷怪(start: number){}
/**
     * 荣耀活动，获得点数
     *
     * @param gain
     * @出自类 V168荣耀API
     */
gainGloryEventPoint(gain: number){}
/**
     * @出自类 ToolAPI
*/
rand(nums: any){}
/**
     * 强制加入指定事件，不经过任何检查
     * @出自类 EventAPI
     */
forceJoinEvent(name: String){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
getNumberFromAccountQuestInfo(questId: number, key: String, value: number){}
/**
     * 给玩家所在团队发放物品，可正可负
     *
     * @param id        物品
     * @param quantity  数量
     * @param removeAll 是否全部移除
     * @出自类 ItemAPI
     */
givePartyItems(id: number, quantity: number, removeAll: number){}
/**
     * @出自类 凯梅尔兹航海API
*/
凯梅尔兹航海_更新航海状态_继续航行(){}
/**
     * 黎曼 上一百层 更新黑洞位置
     *
     * @param holeBottom
     * @param holeTop
     * @param orca
     * @param time       单位毫秒
     * @出自类 黎曼API
     */
upShowHoleSchedule(holeBottom: number, holeTop: number, orca: number, time: number){}
/**
     * 给指定所在团队发放物品，可正可负
     *
     * @param id       物品
     * @param quantity 数量
     * @param party
     * @出自类 ItemAPI
     */
givePartyItems(id: number, quantity: number, party: any){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_初始队员(){}
/*
     角色选择恶魔复仇者需要计算下HP攻击
     * @出自类 SkillAPI
     */
giveAvengerHpBuff(){}
/**
     * @出自类 ItemAPI
*/
isCash(itemId: number){}
/**
     * @出自类 MovieEffectAPI
*/
cameraSwitch_PushSwitchMoveToPos(value0: number, value1: number, value2: number){}
/**
     * <true=穿戴 false=脱下>
     *
     * @param 状态
     * @出自类 PlayerAPI
     */
副手武器(状态: number){}
/**
     * 给指定团队所有人加经验，受倍率加成
     *
     * @param amount 经验
     * @param party
     * @出自类 PartyAPI
     */
givePartyExp(amount: number, party: any){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_限时答题_纯文本(type: number, title: String, problem: String, hint: String, minLen: number, maxLen: number, secondsLeft: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, x: number, y: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber_Bottom(text: String, npc: number, defaultNumber: number, min: number, max: number, style: number, bottomSytle: number){}
/**
     * set神之子男脸型
     *
     * @param 脸型ID
     * @出自类 PlayerAPI
     */
set神之子男脸型(脸型ID: number){}
/**
     * V172新复古，魔王皮洛克专用版本
     * @出自类 MapAPI
     */
obstacleFall魔王皮洛克(delay: number){}
/**
     * 叠加图层，出现于冒险岛英雄act1
     *
     * @param path
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
effect_AddLayer(path: String, v1: number, v2: number){}
/**
     * @出自类 MissionAPI
*/
MissionReMake(charid: number, missionid: number, repeat: number, repeattime: number, lockmap: number){}
/**
     * 与 fieldEffect_复合图片动画 关联
     *
     * @param tag      复合图片动画的标签
     * @param v1       淡出动作类型？
     * @param timeInMs 淡出时间
     * @出自类 MovieEffectAPI
     */
fieldEffect_取消复合图片动画(tag: String, v1: number, timeInMs: number){}
/**
     * @出自类 SkillAPI
*/
giveMountSkill(itemId: number, mountSkillId: number, period: number){}
/**
     * @出自类 NpcAPI
*/
openNpc(client: any, npc: number, mode: number, filename: String){}
/**
     * 显示怪物图片素材，出现于莫奈德Act2追逐战后
     *
     * @param text
     * @param scale
     * @出自类 MovieEffectAPI
     */
setMobImage(text: String, scale: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineS(text: String){}
/**
     * 人物变暗，出现于冒险岛英雄act1
     *
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
effect_DarkenPlayer(v1: number, v2: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber_Bottom(text: String, defaultNumber: number, min: number, max: number){}
/**
     * 增加团队所有成员的日志次数记录
     *
     * @param name  日志名称
     * @param count 次数
     * @param type  0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
party_addPlayerLog(name: String, count: number, type: number){}
/**
     * 给玩家团队里所有成员发送通知
     *
     * @param type 通知类型：
     * 

     *             -1 = 红色正中提示，过几秒会淡出消失
     * 

     *             1 = 弹窗提示，需要点击确认才能取消
     * 

     *             2 = 蓝底系统提示，出现在聊天框
     * 

     *             3 = (null)红底系统提示，出现在聊天框
     * 

     *             5 = 红色系统提示，出现在聊天框
     * 

     *             6 = 蓝色系统提示，出现在聊天框
     * 

     *             -6 = 灰色系统提示，出现在聊天框
     * 

     *             -7 = 黄色系统提示，出现在聊天框
     * 

     * @出自类 MessageAPI
     */
partyMessage(type: number, msg: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askText_Bottom(text: String, defaultText: String, npc: number, minLen: number, maxLen: number){}
/**
     * 杀死当前地图所有怪物，掉落
     * @出自类 MonsterAPI
     */
killAllMob(){}
/**
     * 莫奈德的各项操作
     * @出自类 莫奈德API
     */
莫奈德_特效(text: String, v: any){}
/**
     * @出自类 贝勒德API
*/
贝勒德_动画(key: String, value: number){}
/**
     * 荣耀活动，激战海洋，显示UI
     * @出自类 V168荣耀API
     */
gloryRagingSeaStartFight(){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
setAccountQuestInfo(questId: number, info: String){}
/**
     * 版本活动，无限怪物挑战，更新等级和BOSS血条
     * @出自类 版本活动API
     */
版本活动_无限怪物挑战_更新难度等级(level: number, curBar: number, totalBar: number, totalHP: number, curHP: number){}
/**
     * 异逝界，初始化本地物体的状态
     * @出自类 异逝界API
     */
afterlandInitMapObject(name: any, b0: any, b1: any, b2: any, v1: any, v2: any){}
/**
     * 给玩家播放网页视频。
     *
     * @param url 视频网址
     * @出自类 MovieEffectAPI
     */
playVideoByHttp(url: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC_Illus(text: String, diffNPC: number){}
/**
     * @出自类 NPCConversationManager
*/
setIv(iv: any){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
addNumberForAccountQuestInfo(questId: number, key: String, diff: number){}
/**
     * @出自类 MessageAPI
*/
addPopupSay(id: number, time: number, text: String, text2: String){}
/**
     * 掉血效果
     *
     * @param itemId
     * @param v1
     * @出自类 CashAPI
     */
showCashItemEffect(itemId: number, v1: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Illus(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * 移除由 npc_ChangeController() 控制的NPC
     *
     * @param npcid NPC，兼容老版本方法
     * @see #npc_ChangeController(int npcid, String npcTag, int x, int y, int f)
     * @出自类 NpcAPI
     */
npc_LeaveField(npcid: number){}
/**
     * @出自类 PlayerAPI
*/
respawn(force: number){}
/**
     * @出自类 MapEffectAPI
*/
onSetMapObjectCreateLayer(map: String, v1: number, v2: number){}
/**
     * 获得所有怪物收藏
     * @出自类 怪物收藏API
     */
gainAllMobCollection(){}
/**
     * @return 任务的名称
     * @出自类 QuestAPI
     */
getQuestName(questId: number){}
/**
     * @出自类 SkillAPI
*/
clearAllBuffs(){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuSNoESC(text: String){}
/**
     * 使用组件蓝图或者建筑道具
     * @出自类 我的小屋API
     */
我的小屋_添加图纸道具(itemId: number){}
/**
     * @return 用于剧情的临时NPC的控制器
     * @出自类 AbstractPlayerInteraction
     */
getNpcController(){}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
sendNext_Bottom(text: String){}
/**
     * 取得NPC控制权，或者创建一个虚假NPC
     *
     * @param npcid         NPC的ID，不存在则不会召唤
     * @param npcTag        NPC的标签，用于区分多个相同ID。如果不为 null 则一定会创建新虚假NPC。如果为 null
     *                      则会检查是否已有相同NPC，有则获取其控制权。
     * 

     *                      为了避免混淆，请不要使用数字标签。
     * @param x             坐标
     * @param y             坐标
     * @param fh            落脚平台
     * @param rx0           可移动X坐标左边界
     * @param rx1           可移动X坐标右边界
     * @param faceLeft      朝向
     * @param canMove       是否可以移动
     * @param fadeInTime    出现时的淡入时间
     * @param forceSpawnNew 是否总是创建新NPC
     * @param avatar        自定义外观组件
     * @出自类 NpcAPI
     */
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, fh: number, rx0: number, rx1: number, faceLeft: number, canMove: number, fadeInTime: number, forceSpawnNew: number, avatar: any){}
/**
     * 移除当前地图的指定NPC。会在地图重置、重载后重新出现。
     *
     * @param npcId
     * @出自类 NpcAPI
     */
removeNpc(npcId: number){}
/**
     * @出自类 PartyAPI
*/
genericGuildMessage(code: number){}
/**
     * 家具栏位扩展
     * @出自类 我的小屋API
     */
setMaxFurnitureSlot(target: number){}
/////////////////////////////////////////////////// 任务 ///////////////////////////////////////////////////////
startQuest(idd: number){}
/**
     * @出自类 ItemAPI
*/
addFromDrop(statsSel: any){}
/**
     * @出自类 PartyAPI
*/
increaseGuildCapacity(trueMax: number){}
/**
     * 显示神之子镜世界副本列表
     *
     * @param names
     * @param ids
     * @param descs
     * @出自类 镜世界API
     */
setMirrorDungeonInfo(names: any, ids: any, descs: any){}
/**
     * 播放音效，没有特殊参数
     *
     * @param text
     * @出自类 MovieEffectAPI
     */
playSoundEffDirectly(text: String){}
/**
     * 恶魔夜光转职选择
     *
     * @param type 0=夜光 1=恶魔
     * @出自类 ScriptMessageAPI
     */
onScriptMessage_选择转职道路(type: number){}
/**
     * 冒险岛英雄，设置可用英雄列表
     *
     * @param heros
     * @出自类 冒险岛英雄API
     */
mapleHeroSetList(heros: any){}
/**
     * 从QuestInfo读取数值
     * @出自类 QuestAPI
     */
getNumberFromQuestInfo(questId: number, key: String){}
/**
     * 武陵道场排行榜
     * @出自类 武陵道场API
     */
武陵道场_排行榜(){}
/**
     * @出自类 MapAPI
*/
戴米安未知(){}
/**
     * 刷怪，指定血量魔量经验倍率
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param multipler 倍率
     * @param pos 坐标 java.awt.Point(x,y)
     * @出自类 MonsterAPI
     */
spawnMobMultipler(mobId: number, quantity: number, multipler: number, pos: any){}
/**
     * @出自类 NpcAPI
*/
npc_SetSpecialAction(npcTag: String, action: String){}
/**
     * 获得玩家当前地图ID
     * @出自类 MapAPI
     */
getMapId(){}
/**
     * 播放世界消息，显示道具信息
     *
     * @param title   类型
     * @param message 消息
     * @param item    道具
     * @出自类 MessageAPI
     */
worldMessageItem(title: String, message: String, item: any){}
/**
     * @出自类 SkillAPI
*/
getSkillName(skillId: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Illus(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * @出自类 SqlAPI
*/
createTable(tableName: String, sql: String){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_ForcedFlip(value0: number){}
/**
     * 强制提升1级星之力，无上限
     * @出自类 ItemAPI
     */
forceUpgradeStarForce(equip: any){}
/**
     * @出自类 PlayerAPI
*/
setAndroid(ticket: number, args: number){}
/**
     * 不知道为什么 22F的陷阱传送点也无法触发，只能人肉触发了
     * @出自类 起源之塔API
     */
起源之塔_22F陷阱(){}
/**
     * 设置地图物体移动，出现于莫奈德Act2，吸引怪物，引发雪崩
     * @出自类 MapEffectAPI
     */
onSetMapObjectMove(key: String, v: any){}
/**
     * 播放音乐
     * 

     *
     * @param path 地址，"Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
effect_PlayMusic(path: String){}
/**
     * 获取玩家名称
     *
     * @return
     * @出自类 PlayerAPI
     */
getName(){}
/**
     * @出自类 PlayerAPI
*/
getEPoints(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC_Illus(text: String){}
/**
     * 获取账户共享任务的信息
     * @出自类 QuestAPI
     */
getAccountQuestInfo(questId: number){}
/**
     * @出自类 UserInterfaceAPI
*/
onActionBarResult(v1: number, v2: number, v3: number, v4: number, v5: number){}
/**
     * @出自类 SkillAPI
*/
getSkillMaxLevel(skillId: number){}
/**
     * 异世界的朋友，运动会活动，随机掉落道具
     * @出自类 V170鬼怪夜市API
     */
sportsMeetDrop(){}
/**
     * 移除玩家背包里指定物品的所有数量
     *
     * @param id 物品ID
     * @出自类 ItemAPI
     */
removeAll(id: number){}
/**
     * @出自类 PlayerAPI
*/
gainPlayerPoints(gain: number){}
/**
     * 一键生成地图脚本
     * @出自类 ToolAPI
     */
genMapScript(start: number, end: number){}
/**
     * 退出射击模式
     * @出自类 杂项API
     */
onClearGun(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAvatar(text: String, styles: any){}
/**
     * @出自类 MonsterAPI
*/
spawnMonster(id: number, hp: number, x: number, y: number){}
/**
     * 从指定数值里随机抽取N个值
     *
     * @param arr   long[]
     * @param amout 目标数量，小于入参则不会重复，否则会重复
     * @return long[]
     * @出自类 ToolAPI
     */
randArray(arr: any, amout: number){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_PushScaleInfo(moveTime: number, b1: number, ratio: number, playTime: number, x: number, y: number){}
/**
     * 获取保存的地图
     * @出自类 PlayerAPI
     */
getSavedLocation(loc: String){}
/**
     * 获得玩家的指定任务的状态实例，附带记录
     *
     * @param id 任务
     * @return
     * @出自类 QuestAPI
     */
getQuestRecord(id: number){}
/**
     * 获取最近充值记录
     *
     * @param day 天数
     * @return
     * @出自类 CashAPI
     */
getSevenDayPayLog(day: number){}
/**
     * @出自类 PlayerAPI
*/
hairExists(hair: number){}
/**
     * @出自类 PlayerAPI
*/
跟随(状态: number){}
/**
     * 求爱之舞，初始化内容
     *
     * @param lengths 每轮动作数量，1366*768分辨率下不建议超过16
     * @出自类 赏金猎人API
     */
loveDanceInit(lengths: any){}
/**
     * 莫奈德风格的随机位置文字气泡，等待一段时间后再执行
     *
     * @param text
     * @param v
     * @param wait 单位是秒
     * @出自类 莫奈德API
     */
莫奈德_特效(text: String, v: any, wait: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkSNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 读取当前玩家GM等级
     *
     * @return
     * @出自类 PlayerAPI
     */
getGmLevel(){}
/**
     * @出自类 SkillAPI
*/
useSkillBook(skillId: number, masterLevel: number){}
/**
     * @出自类 PlayerAPI
*/
checkMedalQuest(){}
/**
     * @出自类 MapAPI
*/
scheduleWarpTask(time: number, to: number, portal: number, show: number){}
/**
     * 保存AI
     * @出自类 PlayerAPI
     */
saveAi(){}
/**
     * @出自类 PlayerAPI
*/
addPartyTrait(t: String, e: number){}
/**
     * @出自类 QuestAPI
*/
getNumberFromQuestInfo(questId: number, key: String, value: number){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_升阶(){}
/**
     * 保存玩家返回地点，用于自由市场这种传送
     *
     * @param loc 地点
     * @出自类 PlayerAPI
     */
saveReturnLocation(loc: String){}
/**
     * 角色改变相对位置，无视任何地图限制，不需要剧情锁
     *
     * @param timeInMs 单位 ms
     * @出自类 MovieEffectAPI
     */
特效_角色改变相对位置(x: number, y: number, timeInMs: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_Hero9(value0: number, value1: number){}
// 要求输入文本
askText(text: String){}
/**
     * @出自类 版本活动API
*/
加速_使用加速器(){}
/**
     * 播放系统信息
     *
     * @param msg 信息
     * @出自类 MessageAPI
     */
systemMessage(msg: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askText(text: String, defaultText: String, npc: number, minLen: number, maxLen: number){}
/**
     * 获取脚本的【整数】类型的值
     * @出自类 ScriptMessageAPI
     */
askNumber_Bottom(text: String){}
/**
     * 让传送点和反应堆直接引用对话脚本
     * @出自类 ToolAPI
     */
openScriptNpc(){}
/**
     * 显示内置网页浏览器
     *
     * @param type ？
     * @param path UI对应的素材
     * @param url  完整网址
     * @出自类 UserInterfaceAPI
     */
openWeb(type: number, path: String, url: String){}
/**
     * 格式化输出字符串
     *
     * @param format   格式
     * @param toFormat 参数
     * @return 字符串
     * @出自类 ToolAPI
     */
format(format: String, toFormat: any){}
/**
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number, msg: String, rareness: number, buy: number){}
/**
     * 前往小屋
     *
     * @param playerid 0=自己 其他为玩家账号ID
     * @出自类 我的小屋API
     */
enterHome(playerid: number){}
/**
     * 当前道具脚本对应的道具ID
     * @出自类 ItemActionManager
     */
setItemId(itemId: number){}
//【是】【否】
askYesNo(text: String){}
/**
     * 读取玩家指定物品拥有数量
     *
     * @param itemId 物品
     * @return 数量
     * @出自类 ItemAPI
     */
getItemQuantity(itemId: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAngelicBuster(npc: number){}
/**
     * 改变玩家表情
     *
     * @param expression 表情
     * @param duration   持续时间
     * @出自类 MovieEffectAPI
     */
emotion(expression: number, duration: number){}
/**
     * 荣耀活动，支援塞尔提乌，解救骑士团，成功
     * @出自类 V168荣耀API
     */
glorySaveKnightsSuccess(){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_BackgroundCanvas(v1: number, v2: number, v3: number, v4: number, v5: number, v6: number){}
/**
     * 我的小屋，获得名称
     * @出自类 我的小屋API
     */
getMyHomeName(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextSNoESC_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk_Illus(text: String){}
/**
     * @出自类 PartyAPI
*/
getCurrentPartyId(mapId: number){}
/**
     * 修改HP上限
     * @出自类 MovieEffectAPI
     */
setMaxHp(maxhp: number){}
/**
     * 更新子弹，出现于 荣耀活动_塞尔提乌城墙_破坏攻城武器
     * @出自类 V168荣耀API
     */
onSetSpecialAmmo(count: number){}
/**
     * @出自类 PartyAPI
*/
endPartyQuest(amount: number){}
/**
     * 屏蔽/解锁操作台
     *
     * @param lock            true=锁 false=解
     * @param showMovieBorder true=有电影式黑边
     * @param asBackground    true=黑边作为背景，不会遮挡对话框
     * @出自类 MovieEffectAPI
     */
setInGameDirectionMode(lock: number, showMovieBorder: number, asBackground: number){}
/**
     * 隐藏背景某个图标
     *
     * @param str
     * @param on
     * @出自类 MapEffectAPI
     */
Hidden_background(str: String, on: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextSNoESC(text: String){}
/**
     * 获得当前频道所有玩家
     *
     * @return 所有玩家
     * @出自类 ToolAPI
     */
getAllCharacters(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineS_Bottom(text: String){}
/**
     * @出自类 主题副本API
*/
克里塞_获得技能(){}
/**
     * 屏幕中间显示文字，从下往上滚动，点击可以强行取消，相当于一次对话
     *
     * @param text           文本
     * @param value0         ？？？反正不能为0
     * @param alignment      0=左对齐 1=居中 2=右对齐
     * @param updateInterval 每隔多少帧刷新一次位置，太高的话，播放会变得不连续
     * @param speed          滚动速度
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_MonologueScroll(text: String, value0: number, alignment: number, updateInterval: number, speed: number){}
/**
     * 查看指定地图内玩家数量
     *
     * @param mapId 地图
     * @return
     * @出自类 MapAPI
     */
getPlayerCount(mapId: number){}
/**
     * 简易的桩接口，用来阻塞脚本运行在低版本端上
     * @出自类 ToolAPI
     */
checkURDVNMOOKGD(){}
/**
     * 戴米安飞箭相关
     *
     * @param delay
     * @出自类 MapAPI
     */
戴米安飞箭(delay: number){}
// multiple monsters, remote location
spawnMonster(id: number, qty: number, x: number, y: number){}
/**
     * 播放用于玩家自身的动画效果，例如表情
     *
     * @param data 地址，如"Effect/Direction15.img/effect/tuto/seal/front"
     * @出自类 MovieEffectAPI
     */
effect_OnUserEff(data: String){}
/**
     * 开启管家UI
     * @出自类 我的小屋API
     */
sendManagerUIPacket(){}
/**
     * 人物移动到指定坐标
     *
     * @param value0
     * @param 玩家ID
     * @param x
     * @param y
     * @see #onTeleport(byte, byte, int, int, int)
     * @出自类 PlayerAPI
     */
onTeleport(value0: number, 玩家ID: number, x: number, y: number){}
/**
     * 镜世界副本，更新BOSS
     *
     * @param type
     * @param boss
     * @出自类 镜世界API
     */
updateMirrorDungeonBoss(type: number, boss: number){}
/**
     * @出自类 MovieEffectAPI
*/
setDirectionMode(enabled: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuS(text: String){}
/**
     * @出自类 MapAPI
*/
destroyReactor(mapId: number, id: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrev_Illus(text: String, diffNPC: number){}
/**
     * @出自类 UserInterfaceAPI
*/
剪刀石头布_开始(){}
/**
     * 荣耀活动，允许使用技能，海岸峭壁之战
     *
     * @param game   239=支援被孤立的弓手基地 240=阻截敌人登陆 241=采集太阳花
     * @param action 动作 11=激活技能 12=禁用技能区域
     * @param v3
     * @出自类 V168荣耀API
     */
gloryEnableEventSkill(game: number, action: number, v3: number){}
/**
     * 显示说话气泡
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @param colorStyle  0=黑边白底 1=金框粉底（只有普通风格）
     * @param nameHeight  ？相对高度差
     * @param time        持续时间
     * @param npcID
     * @param playerID
     * @出自类 MovieEffectAPI
     */
effect_NormalSpeechBalloon(data: String, borderStyle: number, colorStyle: number, nameHeight: number, time: number, npcID: number, playerID: number){}
/**
     * @出自类 QuestAPI
*/
getStringFromQuestInfo(questId: number, key: String){}
/**
     * 移除玩家背包里指定物品
     *
     * @param id 物品ID
     * @出自类 ItemAPI
     */
removeItem(id: number, quantity: number){}
/**
     * @出自类 WeddingAPI
*/
doWeddingEffect(ch: any){}
/**
     * @出自类 V172新复古API
*/
新复古王国_桑拿(){}
/**
     * @出自类 PartyAPI
*/
isLeader(){}
/**
     * 好友故事的奖励
     * @出自类 好友故事API
     */
campusReward(exp: number, equipEXP: number, itemCount: number, additionalEXP: number, v2: number, v3: number, levels: number, boss1: number, rewardType1: number, boss2: number, rewardType2: number, boss3: number, rewardType3: number, boss4: number, rewardType4: number, boss5: number, rewardType5: number){}
/**
     * @出自类 MovieEffectAPI
*/
funckeySetByScript(type: number, skillID: number, keyIndex: number){}
/**
     * 刷怪
     *
     * @param id 怪物
     * @param qty 数量
     * @param pos 坐标 java.awt.Point(x,y)
     * @出自类 MonsterAPI
     */
spawnMob(id: number, qty: number, pos: any){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrev(text: String, style: number, diffNpcID: number){}
/**
     * @出自类 ItemAPI
*/
removeAllItem(sel: number){}
/**
     * 对话时玩家输入的内容的缓存
     * @出自类 NPCConversationManager
     */
getText(){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_获得道具(itemId: number){}
/**
     * 查看怪物是否还在玩家当前地图
     *
     * @param mobid 怪物
     * @return
     * @出自类 MonsterAPI
     */
getMonsterByID(mobid: number){}
/**
     * 召唤NPC
     *
     * @param npcId
     * @param x
     * @param y
     * @出自类 NpcAPI
     */
spawnNpc(npcId: number, x: number, y: number){}
/**
     * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
     *
     * @param id 任务
     * @出自类 QuestAPI
     */
forceStartQuest(id: number){}
/**
     * @出自类 冒险岛支援API
*/
冒险岛支援_领取全部奖励(){}
/**
     * @出自类 ItemAPI
*/
getNaturalStats(itemId: number, it: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC(text: String){}
/**
     * 活动信封
     * @出自类 杂项API
     */
getEventEnvelope(questid: number, time: number){}
/**
     * 刷物品
     *
     * @param id          物品
     * @param quantity    数量
     * @param randomStats 是否随机化属性
     * @param period      剩余时间，默认以天为单位
     * @param hours       剩余时间改为以小时为单位
     * @param 升级次数        提升装备的可升级次数
     * @param owner       拥有者
     * @param cg          玩家
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, randomStats: number, period: number, hours: number, 升级次数: number, owner: String, cg: any){}
/**
     * @出自类 QuestAPI
*/
forfeitQuest(idd: number){}
/**
     * 延迟刷怪
     *
     * @param time 单位 ms
     * @出自类 MonsterAPI
     */
spawnMobSchedule(id: number, qty: number, x: number, y: number, time: number){}
/**
     * @出自类 PlayerAPI
*/
setAvatar(ticket: number, args: number){}
/**
     * 神之子通用发型
     *
     * @param 男发型ID
     * @param 女发型ID
     * @出自类 PlayerAPI
     */
set神之子通用发型(男发型ID: number, 女发型ID: number){}
/**
     * @出自类 QuestAPI
*/
getNumberFromQuestCustomData(quest: number){}
/**
     * 添加表情包
     *
     * @param groudId
     * @param stickers
     * @param expires
     * @出自类 杂项API
     */
addStickerGroup(groudId: number, stickers: any, expires: any){}
/**
     * 出现于塞尔提乌城墙，阻止怪物海鸥，效果未知
     * @出自类 V168荣耀API
     */
showStalkResult(mode: number){}
/**
     * @出自类 MapEffectAPI
*/
createRadianObstacle(map: MapleMap, effect: number, type: any, trueDamR: number, startPos: any, radius: number, round: any, delay: any, angle: any, nVPerSec: any, nMaxp: any){}
/**
     * @出自类 PlayerAPI
*/
gainMeso(gain: number, show: number){}
/**
     * 获得钱
     *
     * @param gain 数量 ，可正可负
     * @出自类 PlayerAPI
     */
gainMeso(gain: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNormalTalk_Bottom(text: String, style: number, diffNPC: number, prev: number, next: number, bottomSytle: number, autoSkipTime: number){}
/**
     * @出自类 起源之塔API
*/
起源之塔_获得戒指(itemId: number, period: number){}
/**
     * QuestInfo 增加某一项的数值
     *
     * @param diff 增幅
     * @param min  最终结果的最小值
     * @param max  最终结果的最大值
     * @return
     * @出自类 QuestAPI
     */
addNumberForQuestInfo(questId: number, key: String, diff: number, min: number, max: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC_Illus(text: String, diffNPC: number){}
/**
     * 播放图片或动画，时间由wz定义，不可变更
     * 

     * 难得的不需要锁定玩家界面
     *
     * @param broadcast 是否广播
     * @param path      地址，如 "Map/Effect.img/rootabyss/demian"
     * @出自类 MovieEffectAPI
     */
fieldEffect_ScreenMsg(broadcast: number, path: String){}
/**
     * @出自类 PetAPI
*/
isBUG宠物(itemId: number){}
// only used for meso = false, really. No minItems because meso is used to fill the gap
dropItems(){}
/**
     * @出自类 PlayerAPI
*/
saveToDB(chr: Character){}
/**
     * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
     *
     * @param id         任务
     * @param customData 对应wz里没有关联到exVariable的value，不少任务、NPC变动依赖特定任务的CustomData值
     * @出自类 QuestAPI
     */
forceStartQuest(id: number, customData: String){}
/**
     * V5满5转技能
     * @出自类 SkillAPI
     */
maxV5skill(){}
/**
     * 黎曼 上一百层小游戏
     * @出自类 黎曼API
     */
upStart(){}
/**
     * 切换背景音乐
     *
     * @param path 地址，比如：
     * 

     *             静音 = "Bgm00/Silence"
     * 

     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayBGM(path: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoSNoESC_Bottom(text: String){}
/**
     * 获得玩家当前地图实例
     * @出自类 MapAPI
     */
getMap(){return new MapleMap() }
/**
     * @出自类 PlayerAPI
*/
getLevel(){}
/**
     * 通过传送门
     * @出自类 痛苦迷宫API
     */
enterMazePortal(type: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkS(text: String){}
/**
     * @出自类 UserInterfaceAPI
*/
次元之镜UI(){}
/**
     * 查询玩家日志的记录次数，一般用于BOSS战斗次数限制
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
getPlayerLog(name: String, type: number){}
/**
     * 人物移动到指定传送点
     *
     * @param name
     * @出自类 PlayerAPI
     */
onTeleportPortal(name: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu(text: String, diffNPC: number){}
/**
     * 获取经验倍率
     * @出自类 PlayerAPI
     */
getExpRate(){}
/*
     * 删除所有技能
     * @出自类 SkillAPI
     */
clearAllSkills(){}
/**
     * @出自类 PlayerAPI
*/
setHair(hair: number){}
/**
     * 守卫城墙，更新波数
     *
     * @param wave
     * @出自类 赏金猎人API
     */
protectWallWave(wave: number){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_万神殿传送门列表(type: number, lastIcon: number, text: String){}
/**
     * 设置地图内指定物体的动画，出现于少林寺消灭BOSS后剧情
     *
     * @param map
     * @param v1
     * @出自类 MapEffectAPI
     */
onSetMapTaggedObjectAnimation(map: String, v1: number){}
/**
     * @出自类 MessageAPI
*/
broadcastServerMsg(type: number, msg: String, weather: number){}
/**
     * 随机混染
     * @出自类 PlayerAPI
     */
setmixBaseHair(){}
/**
     * @出自类 SqlAPI
*/
queryForObject(sql: String, requiredType: any, args: any){}
/**
     * 我的小屋，获得赞数
     * @出自类 我的小屋API
     */
getMyHomeLike(){}
/**
     * 好友故事 音乐游戏
     * @出自类 ScriptMessageAPI
     */
onScriptMessage_音乐游戏(sound: String, act: number, b: number, c: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevNoESC_Illus(text: String){}
/**
     * 根据名称或者ID来模糊匹配
     *
     * @param type   搜索类型 {@link org.bms.common.enums.keepnames.SearchUtilType}
     * @param search 关键词
     * @return 匹配上的ID列表
     * @出自类 SearchAPI
     */
searchForIds(type: number, search: String){}
/**
     * 显示瞄准UI，出现于塞尔提乌城墙，阻止怪物海鸥
     * @出自类 V168荣耀API
     */
openBattlePvPChampSelectUI(skill: number){}
/**
     * @出自类 MovieEffectAPI
*/
cameraSwitch_SetCameraMoveByCID(str0: String, value0: number, value1: number, value2: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuS_Bottom(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAndroid(text: String, styles: any, card: number){}
/**
     * @出自类 UserInterfaceAPI
*/
updateEventUI(ui: number, on: number){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_黑色之翼密码锁(result: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrev(text: String, diffNpcID: number){}
/**
     * @出自类 黑色天堂API
*/
黑色天堂_空战失败(){}
/**
     * @出自类 MissionAPI
*/
MissionGetMobId(charid: number, missionid: number){}
/**
     * 屏蔽/解锁操作台
     *
     * @param lock            true=锁 false=解
     * @param showMovieBorder true=有电影式黑边
     * @出自类 MovieEffectAPI
     */
setInGameDirectionMode(lock: number, showMovieBorder: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline(text: String, diffNPC: number){}
/**
     * 任务常用的日期格式，如：
     * 

     * yyyyMMdd
     * 

     * yyyyMM
     * 

     * yy/MM/dd
     * 

     * yyyy-MM-dd HH:mm:ss
     * 

     * yyyy年MM月dd日 HH时mm分ss秒
     * 

     * yyyyMMddHHmmss
     * 

     * yyMMddHHmmss
     * 

     * HH:mm:ss
     * 

     * @出自类 ToolAPI
     */
getNowTimeString(format: String){}
/**
     * 荣耀活动_支援塞尔提乌_歼灭侦察队，出现探照灯
     * @出自类 V168荣耀API
     */
cerniumFindSpySearchLightTracer(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineSNoESC(text: String){}
/**
     * 自动创建队伍
     * @出自类 PartyAPI
     */
PartyAutoOn(){}
/**
     * 获取AI 脚本对话用到
     *
     * @return
     * @出自类 PlayerAPI
     */
getAi(){}
/**
     * @出自类 MissionAPI
*/
MissionMaxNum(missionid: number, maxnum: number){}
/**
     * @出自类 SkillAPI
*/
addSkillPoint(sp: number){}
// handler for all spawnMonster
spawnMonster(id: number, qty: number, pos: any){}
/**
     * 脱掉身上所有装备
     * @出自类 PlayerAPI
     */
unequipEverything(){}
/**
     * @出自类 UserInterfaceAPI
*/
enter商城(){}
/**
     * 包裹满了吗
     *
     * @param itemId 物品
     * @return
     * @出自类 ItemAPI
     */
canHold(itemId: number){}
/**
     * @出自类 PlayerAPI
*/
setFace(face: number){}
/**
     * 查看修复日志
     * @出自类 ToolAPI
     */
getUpdateLog(){}
/**
     * 移除玩家背包里指定位置的指定数量
     *
     * @param slot     格子位置
     * @param invType  背包页签类型
     * @param quantity 数量
     * @return
     * @出自类 ItemAPI
     */
removeItem(slot: number, invType: number, quantity: number){}
/**
     * @出自类 ItemAPI
*/
getItemall(chr: Character){}
/**
     * @出自类 外星异次元API
*/
外星异次元_击杀提示(cur: number, total: number){}
/**
     * 重置指定地图
     *
     * @param mapId 地图
     * @出自类 MapAPI
     */
resetMap(mapId: number){}
/**
     * 传送到指定地点
     *
     * @param map 地图
     * @出自类 MapAPI
     */
warp(map: number){}
/**
     * 刷怪
     * @出自类 MonsterAPI
     */
spawnMob(id: number, 数量: number, x: number, y: number){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_Unknown9(value0: number){}
/**
     * @return 任务脚本当前的任务
     * @出自类 BasicParamAPI
     */
getQuest(){}
/**
     * @出自类 PlayerAPI
*/
getRecalcLocalStats(){}
/**
     * 卸载指定装备 脱掉指定装备
     *
     * @param itemId
     * @出自类 PlayerAPI
     */
unequip(itemId: number){}
//【开始】【以后再说】
askStartEndS(text: String){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_ForcedFlip15(value0: number, value1: number, value2: number, value3: number, value4: number){}
/**
     * 设置枪械模式弹药
     *
     * @param count
     * @出自类 杂项API
     */
onSetAmmo(count: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu(text: String, style: number, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC_Bottom(text: String){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection(){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_鬼魂公园_入场符咒组合(){}
/**
     * 设置玩家修为等级
     * @出自类 修仙API
     */
setPlayeramuont(number: number){}
/**
     * 杀死当前地图所有怪物，没有掉落也没有经验
     * @出自类 MonsterAPI
     */
killAllMobNoExp(){}
/**
     * 获取地图街道名字
     * @出自类 PlayerAPI
     */
getMapSimpleName(id: number){}
/**
     * 变成无面人
     *
     * @param value0 参考值1
     * @param value1 参考值300
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_SetFaceOff(value0: number, value1: number){}
/**
     * 未知操作，激战海洋时出现
     * @出自类 V168荣耀API
     */
execCommand(cmd: String){}
/**
     * @出自类 PlayerAPI
*/
刷新MP基址(num: number){}
/**
     * @出自类 CashAPI
*/
getHyPay(type: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Illus(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 WeddingAPI
*/
handleDivorce(){}
/**
     * 增加玩家日志的次数记录，默认+1，会每日清空
     *
     * @param name 日志名称
     * @出自类 EventAPI
     */
addPlayerLog(name: String){}
/**
     * @出自类 ToolAPI
*/
getConstantScriptContent(name: String){}
/**
     * 延迟刷怪
     *
     * @param time 单位 ms
     * @出自类 MonsterAPI
     */
spawnMobSchedule(id: number, qty: number, x: number, y: number, time: number, level: number){}
/**
     * 获取倾向倍率
     * @出自类 PlayerAPI
     */
getTraitRate(){}
/**
     * 获得玩家的指定任务的CustomData值，对应没有exVariable的value
     *
     * @param quest 任务
     * @return
     * @出自类 QuestAPI
     */
getQuestCustomData(quest: number){}
/**
     * 异逝界，勇士之地，头顶显示剩余怪物数量
     * @出自类 异逝界API
     */
afterlandKillWarn(total: number){}
/**
     * 镜世界副本，结算
     *
     * @param cur
     * @param best
     * @param count
     * @param exp
     * @param wp
     * @param s1
     * @param v1
     * @出自类 镜世界API
     */
showMirrorDungeonReward(cur: number, best: number, count: number, exp: number, wp: number, s1: number, v1: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 玩具塔出现,瞬移到某个传送位置
     *
     * @param Portal
     * @出自类 MapAPI
     */
instantMapWarp(Portal: number){}
/**
     * 查看玩家本次登录持续时间
     *
     * @return
     * @出自类 PlayerAPI
     */
getOnlineTime(){}
/**
     * 新手剧情用到
     * @出自类 ScriptMessageAPI
     */
onScriptMessage_显示教程引导图片(wzinfo: any){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline(text: String, style: number, diffNPC: number){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_随机选择新队员(){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Illus_II(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * 杀死当前地图所有怪物
     * @出自类 MonsterAPI
     */
killAllMob(drop: number){}
/**
     * 塞尔提乌城墙，阻止怪物海鸥，开始
     * @出自类 V168荣耀API
     */
cerniumBefenseBirdStart(){}
/**
     * 隐藏角色
     *
     * @param doHide 1=隐藏 0=显示
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_SetHideEffect(doHide: number){}
/**
     * @出自类 ItemAPI
*/
Item类型武器(itemId: number){}
/**
     * 怪物护送完整路径
     * @出自类 MonsterAPI
     */
updateMobEscortFullPath(oid: number, vs: any, s: number){}
/**
     * 在对话中，延迟一段时间后触发等同于[下一步]的效果
     * 

     * 注意，搭配其他效果方法时，一定要保障同一个状态内[if(status==x){}]有且只有一个方法可以触发进入下一轮状态，否则会有不可预测后果
     *
     * @param time 等待时间，单位毫秒
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_AskAnswerTime(time: number){}
/**
     * 刷怪，指定等级，原地
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param level 等级
     * @出自类 MonsterAPI
     */
spawnMobLevel(mobId: number, quantity: number, level: number){}
/**
     * @出自类 PartyAPI
*/
partyMembersInMap(){}
/**
     * 播放世界消息
     *
     * @param message 消息
     * @出自类 MessageAPI
     */
worldMessage(message: String){}
/**
     * 兼容老脚本
     * @出自类 MovieEffectAPI
     */
fieldEffect_InsertCanvas(enable: number, alpha: number, R: number, G: number, B: number, duration: number){}
/**
     * @出自类 BasicParamAPI
*/
getAPI(){return new AbstractPlayerInteraction() }
/**
     * 移除团队里所有玩家背包里指定物品的所有数量
     *
     * @param id 物品ID
     * @出自类 ItemAPI
     */
removeFromParty(id: number){}
/**
     * 检查技能是否存在
     * @出自类 SkillAPI
     */
skillExist(skillId: number){}
/**
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number, msg: String, rareness: number){}
/**
     * @出自类 MapEffectAPI
*/
地图特效_开关落脚点_Schedule(object: any, action: any, interval: number, delay: number){}
/**
     * 强制向指定相对坐标跳跃
     * @出自类 MovieEffectAPI
     */
特效_角色强制跳跃(x: number, y: number, b1: number, 隐藏脚底气体特效: number){}
/**
     * 注册修仙
     * @出自类 修仙API
     */
registXiuxian(){}
/**
     * 获得宠物
     * @出自类 PetAPI
     */
gainPetItem(id: number, quantity: number){}
/**
     * 播放世界消息，黄色风格
     *
     * @param msg 消息
     * @出自类 MessageAPI
     */
worldMessageYellow(msg: String){}
/**
     * NPC翻转
     *
     * @param npcTag
     * @param value
     * @出自类 NpcAPI
     */
npc_setForceFlip(npcTag: String, value: number){}
/**
     * @出自类 ItemAPI
*/
equipOrDrop(src: number){}
/**
     * @出自类 BasicParamAPI
*/
getNpcController(){}
/**
     * @出自类 PlayerAPI
*/
注册AI智能机器人(){}
/**
     * @出自类 ItemAPI
*/
addFromDrop(item: any, show: number){}
/**
     * 召唤NPC
     *
     * @param npcId
     * @param pos   坐标
     * @出自类 NpcAPI
     */
spawnNpc(npcId: number, pos: any){}
/**
     * @出自类 UserInterfaceAPI
*/
组队任务_世界排行榜(){}
/**
     * 获得点券
     *
     * @param amount 数量，可正可负
     * @出自类 CashAPI
     */
gainNX(amount: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Illus(text: String){}
/**
     * 获取玩家修为等级
     * @出自类 修仙API
     */
getPlayeramuont(){}
/**
     * 增加账号日志的次数记录
     *
     * @param name  日志名称
     * @param type  0=永久 other=记录保存时间
     * @param count 次数
     * @出自类 EventAPI
     */
addAccountLog(name: String, type: number, count: number){}
/**
     * 添加全屏单色遮罩
     *
     * @param enable   1=开，0=关
     * @param alpha    0=透明，255=全黑
     * @param R
     * @param G
     * @param B
     * @param duration 时间
     * @param value6   ？？？
     * @出自类 MovieEffectAPI
     */
fieldEffect_InsertCanvas(enable: number, alpha: number, R: number, G: number, B: number, duration: number, value6: number){}
/**
     * 荣耀活动，支援塞尔提乌，解救骑士团，设置骑士HP百分比
     *
     * @param id 骑士编号 0~4
     * @出自类 V168荣耀API
     */
glorySaveKnightsHP(id: number, hp: number){}
/**
     * @出自类 MovieEffectAPI
*/
effect_准心瞄准效果(nums: any){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrev(text: String, style: number, diffNPC: number){}
/**
     * @出自类 SkillAPI
*/
获得V技能(coreId: number){}
// 增加报道次数
MissionFinish(charid: number, missionid: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_LimanB(value0: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextS_Bottom(text: String){}
/**
     * 刷物品
     *
     * @param id          物品
     * @param quantity    数量
     * @param randomStats 是否随机化属性
     * @param 升级次数        提升装备的可升级次数
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, randomStats: number, 升级次数: number){}
/**
     * @出自类 PlayerAPI
*/
getBuddyCapacity(){}
/**
     * 变成无面人
     *
     * @param value0 参考值1
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_SetFaceOff(value0: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Bottom(text: String, style: number, diffNPC: number){}
/**
     * 荣耀挂机 力量训练
     * @出自类 V168荣耀API
     */
gloryIdle(){}
/**
     * @出自类 PyramidAPI
*/
sendPyramidEnergy(object: String, amount: String){}
/**
     * 显示神之子武器晋升UI
     * @出自类 JobAPI
     */
openZeroUpgradeUI(){}
/**
     * @出自类 QuestAPI
*/
setStringForQuestInfo(questId: number, key: String, num: String){}
/**
     * 荣耀活动_扫荡黑太阳_解救居民，开始
     *
     * @param onSave 是否在救援阶段
     * @出自类 V168荣耀API
     */
cerniumSaveResidentStart(onSave: number){}
/**
     * 设置账号日志的次数记录
     *
     * @param name  日志名称
     * @param type  0=永久 other=记录保存时间
     * @param count 次数
     * @出自类 EventAPI
     */
setAccountLog(name: String, type: number, count: number){}
/**
     * @出自类 UserInterfaceAPI
*/
sendOpenJobChangeUI(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAvatar(text: String, npc: number, card: number, styles: any){}
/**
     * 获取服务端配置的服务器名称
     *
     * @return
     * @出自类 ToolAPI
     */
getServerName(){}
/**
     * @param path
     * @param value0 音量
     * @param value1 0
     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayBGM(path: String, value0: number, value1: number){}
/**
     * @出自类 UserInterfaceAPI
*/
enter拍卖(){}
/**
     * 给玩家所在公会发消息
     *
     * @param type    消息类型
     * @param message
     * @see #playerMessage(int, String)
     * @出自类 MessageAPI
     */
guildMessage(type: number, message: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC_Bottom(text: String){}
/**
     * @出自类 UserInterfaceAPI
*/
sendUltimateExplorer(){}
/**
     * 获取VIP等级
     *
     * @return
     * @出自类 CashAPI
     */
getVip(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNext(text: String, diffNpcID: number){}
// 要求输入文本
askText_Bottom(text: String){}
/**
     * @出自类 UserInterfaceAPI
*/
神秘河快速通道(show: number){}
/**
     * 刷物品，不给出提示
     *
     * @param id       物品
     * @param quantity 数量
     * @出自类 ItemAPI
     */
gainItemSilent(id: number, quantity: number){}
/**g
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number, msg: String, rareness: number, period: number){}
//【接受】【拒绝】
askAcceptDecline(text: String){}
/**
     * 泰捏布利斯，痛苦迷宫，获得终点所对应的地图
     *
     * @return
     * @出自类 痛苦迷宫API
     */
getMazeDestination(){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_限时答题_猜NPC(type: number, quizType: number, npc: number, gotPoints: number, remainQuestions: number, secondsLeft: number){}
/**
     * @出自类 JobAPI
*/
getBeginner(){}
/**
     * @出自类 ItemAPI
*/
haveItem(itemId: number, quantity: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_OverlapScreenDetail(value0: number, value1: number, value2: number, value3: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC(text: String, diffNPC: number){}
/**
     * @出自类 PlayerAPI
*/
updateBuddyCapacity(capacity: number){}
/**
     * 给玩家触发指定NPC的对话脚本
     * 

     * 模式=0
     *
     * @param npc      NPC的ID
     * @param filename 如果为 null 则加载 NPC/npc.js，如果是数字则加载 NPC/npc_[number].js，否则加载
     *                 特殊/[filename].js
     * @出自类 NpcAPI
     */
openNpc(npc: number, filename: String){}
/**
     * 触发使用物品效果
     *
     * @param id
     * @param show 是否显示物品消息
     * @出自类 ItemAPI
     */
useItem(id: number, show: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC_Bottom(text: String){}
/**
     * 角色执行动作
     *
     * @param action [0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃
     *               8=趴下起立
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_MoveAction(action: number){}
/**
     * 求爱之舞，更新状态
     *
     * @param status
     * @出自类 赏金猎人API
     */
loveDanceStatus(status: number){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_猎龙数据更新(){}
/**
     * @出自类 MovieEffectAPI
*/
cameraSwitch_CameraSwitchBack(){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_Tremble(type: number, delay: number, time: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, faceLeft: number, canMove: number){}
/**
     * @出自类 PetAPI
*/
revivePet(uniqueId: number, days: number){}
/**
     * @出自类 PlayerAPI
*/
获取AI智能机器人cid(){}
/**
     * 获取学习的专业技术
     *
     * @return
     * @出自类 SkillAPI
     */
getProfessions(){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, faceLeft: number){}
/**
     * 过滤出有效发型
     * @出自类 PlayerAPI
     */
filterValidHairs(hairs: any){}
/**
     * @出自类 SqlAPI
*/
queryForOneResult(sql: String, args: any){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_Hero8(value0: number){}
/**
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number){}
/**
     * 传送玩家所在团队到指定地点
     *
     * @param mapId  地图
     * @param portal 传送门
     * @出自类 MapAPI
     */
warpParty(mapId: number, portal: number){}
/**
     * 冒险岛英雄 act1 暴风雪
     * @出自类 冒险岛英雄API
     */
snowStormRepeat(){}
/**
     * @出自类 PetAPI
*/
gainCloseness(closeness: number, index: number){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_鬼魂公园_入场符咒组合_竞赛模式(){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Bottom(text: String){}
/**
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number, msg: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC(text: String){}
/**
     * @出自类 MapEffectAPI
*/
触发玩家需要按键盘解锁(){}
/**
     * @出自类 主题副本API
*/
克里塞_获得技能(v1: number, v2: number, b1: number, b2: number, v3: number, skill: number, b3: number, v4: number, v5: number, v6: number, v7: number, v8: number, cd: number, s1: number){}
/**
     * 播放图片或动画，时间由wz定义，不可变更
     * 

     * 难得的不需要锁定玩家界面
     *
     * @param path 地址，如 "Map/Effect.img/rootabyss/demian"
     * @出自类 MovieEffectAPI
     */
fieldEffect_ScreenMsg(path: String){}
/**
     * @出自类 CashAPI
*/
isVip(){}
/**
     * @出自类 ToolAPI
*/
getChannelNumber(){}
/**
     * 起源之塔，显示奖励统计UI
     * @出自类 起源之塔API
     */
起源之塔_奖励UI(floor: number, time: number, point: number, exp: number, box: number, best: number){}
/**
     * 武陵道场，通关一层后，暂停计时器10s
     * @出自类 UserInterfaceAPI
     */
pauseTimer(){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_同时移动镜头和人(value0: number, value1: number){}
/**
     * 神之子刷新女发型
     *
     * @param 发型ID
     * @出自类 PlayerAPI
     */
神之子刷新女发型(发型ID: number){}
/**
     * 脱掉装备
     *
     * @param 装备栏位置
     * @出自类 PlayerAPI
     */
脱掉装备(装备栏位置: number){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
getStringFromAccountQuestInfo(questId: number, key: String, value: String){}
/**
     * @出自类 PlayerAPI
*/
getAndroidStat(type: String){}
/**
     * @出自类 ItemAPI
*/
Item类型现金(itemId: number){}
/**
     * @出自类 PlayerAPI
*/
addHP(delta: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC_Illus(text: String){}
/**
     * 纯粹测试接口
     * @出自类 ToolAPI
     */
test(){}
/**
     * 移除玩家背包里指定物品，但只扣1个
     *
     * @param id 物品ID
     * @出自类 ItemAPI
     */
removeItem(id: number){}
/**
     * 获取地图名字含后缀详细名字
     * @出自类 PlayerAPI
     */
getMapName(id: number){}
/**
     * @出自类 MessageAPI
*/
worldSpouseMessage(type: number, message: String){}
/**
     * @出自类 版本活动API
*/
拼图大师_举起拼图(reactor: Reactor){}
/**
     * 荣耀活动_支援塞尔提乌_歼灭侦察队，开始
     * @出自类 V168荣耀API
     */
cerniumFindSpyStart(){}
/**
     * 为玩家启动导航效果
     *
     * @param mapId   目标地图ID
     * @param mode    0=指向传送点 1=指向NPC
     * @param text    传送点名称，或者NPC的ID
     * @param questID 任务ID，没有关联任务时填0
     * @出自类 MovieEffectAPI
     */
OnStartNavigation(mapId: number, mode: number, text: String, questID: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevS(text: String){}
/**
     * 强制调用任务的开始脚本
     *
     * @param npc
     * @param quest 任务ID
     * @出自类 QuestAPI
     */
startQuestScript(npc: number, quest: number){}
/**
     * 刷怪，指定等级，原地
     *
     * @param mobId 怪物
     * @param level 等级
     * @出自类 MonsterAPI
     */
spawnMobLevel(mobId: number, level: number){}
/**
     * @出自类 MessageAPI
*/
addPopupSay(id: number, time: number, text: String, text2: String, v2: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, fh: number, rx0: number, rx1: number, faceLeft: number, canMove: number, forceSpawnNew: number){}
/**
     * @出自类 ItemAPI
*/
setExpiration(statsSel: any, expire: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC(text: String){}
/**
     * 账号下已装备的联盟卡数量总和
     * @出自类 冒险岛联盟API
     */
get已装备角色卡数量总和(){}
/**
     * 给玩家所在公会发消息
     *
     * @param message
     * @出自类 MessageAPI
     */
guildMessage(message: String){}
/**
     * @出自类 ToolAPI
*/
getLeftPadded(param_in: String, padchar: any, length: number){}
/**
     * 设置强制状态，新手剧情使用
     *
     * @param str   力量
     * @param dex   敏捷
     * @param _int  智力
     * @param luk   运气
     * @param watk  物理攻击力
     * @param matk  魔法攻击力
     * @param acc   命中值
     * @param avoid 回避值
     * @param speed 速度
     * @param jump  跳跃
     * @出自类 MovieEffectAPI
     */
setForcedStat(str: number, dex: number, _int: number, luk: number, watk: number, matk: number, acc: number, avoid: number, speed: number, jump: number){}
/**
     * @出自类 SqlAPI
*/
queryForList(sql: String, requiredType: any, args: any){}
/**
     * 设置玩家VIP事件
     *
     * @param period 时间
     * @出自类 CashAPI
     */
setViptime(period: number){}
/**
     * 强制触发反应堆
     *
     * @param mapId 地图
     * @param id    反应堆
     * @出自类 MapAPI
     */
forceStartReactor(mapId: number, id: number){}
/**
     * 屏蔽/解锁 剧情其他玩家
     *
     * @param enabled 开关
     * @出自类 MovieEffectAPI
     */
setStandAloneMode(enabled: number){}
/**
     * @出自类 SkillAPI
*/
giveMountSkill(itemId: number, mountSkillId: number){}
/**
     * @出自类 成就系统API
*/
成就检查_火热的兄弟情(){}
/**
     * @出自类 PlayerAPI
*/
clearSavedLocation(loc: String){}
/**
     * 临时团队变量？
     * @出自类 杂项API
     */
setPartyValue(key: String, value: String){}
/**
     * 取消骑宠物
     * @出自类 PlayerAPI
     */
cancelQichong(){}
/**
     * @出自类 UserInterfaceAPI
*/
sendProfessionWindow(){}
/**
     * @出自类 凯梅尔兹航海API
*/
凯梅尔兹航海_更新航海状态_消灭怪物数量(){}
/**
     * 查看指定职业的名称
     *
     * @param jobId 职业ID
     * @出自类 JobAPI
     */
getJobName(jobId: number){}
/**
     * 获得指定物品栏枚举
     *
     * @param i 物品栏号
     * @return
     * @出自类 ItemAPI
     */
getInvType(i: number){}
/**
     * 刷怪，指定血量魔量经验倍率
     *
     * @param mobId 怪物
     * @param multipler 倍率
     * @出自类 MonsterAPI
     */
spawnMobMultipler(mobId: number, multipler: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Illus(text: String){}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
sendNormalTalk_Illus_II(text: String, diffNPC: number, style: number, pre: number, next: number, isLeft: number){}
/**
     * @出自类 QuestAPI
*/
getQuestCustomData(){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_SlideText(str0: String, b1: number, b2: number){}
/**
     * 加载FPS模式信息
     *
     * @param type
     * @param type2
     * @param v1
     * @param v2
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @出自类 杂项API
     */
onSetGun(type: String, type2: String, v1: number, v2: number, x1: number, y1: number, x2: number, y2: number){}
/**
     * 获得转生次数+1
     * @出自类 修仙API
     */
gainRepairquency(){}
/**
     * 取消道具的BUFF效果，一般用于取消变身
     * @出自类 ItemAPI
     */
cancelItem(id: number){}
/**
     * 荣耀活动，不稳定边界，结束游戏
     * @出自类 V168荣耀API
     */
unstableBorderEnd(){}
/**
     * @出自类 MessageAPI
*/
spouseMessage(op: number, msg: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC_Illus(text: String){}
/**
     * 检查玩家是否拥有物品
     *
     * @param itemId 物品
     * @return
     * @出自类 ItemAPI
     */
haveItem(itemId: number){}
/**
     * 触发使用技能效果
     *
     * @param skill 技能
     * @param level 等级
     * @出自类 SkillAPI
     */
useSkill(skill: number, level: number){}
/**
     * 纯粹测试接口
     * @出自类 ToolAPI
     */
get服务器启动时间(){}
/**
     * 获得玩家当前职业名称
     * @出自类 JobAPI
     */
getJobName(){}
/**
     * @出自类 JobAPI
*/
is3转(){}
/**
     * 对话时玩家输入的内容的缓存
     * @出自类 NPCConversationManager
     */
setText(text: String){}
/**
     * 神之子，破坏洗脑药
     *
     * @param text
     * @param v1
     * @param v2
     * @param v3
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_BreakEffect(text: String, v1: number, v2: number, v3: number){}
/**
     * 荣耀活动，不稳定边界，开始游戏
     * @出自类 V168荣耀API
     */
unstableBorderStart(){}
/**
     * 屏蔽/解锁操作台
     *
     * @param doLock true=锁 false=解
     * @出自类 MovieEffectAPI
     */
setInGameDirectionMode(doLock: number){}
/**
     * 查询账号日志的记录次数
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
getAccountLog(name: String, type: number){}
/**
     * set神之子通用脸型
     *
     * @param 男脸型ID
     * @param 女脸型ID
     * @出自类 PlayerAPI
     */
set神之子通用脸型(男脸型ID: number, 女脸型ID: number){}
/**
     * @出自类 PlayerAPI
*/
AI跟随(chr: Character, 状态: number){}
/**
     * @出自类 MessageAPI
*/
midMsg(index: number, msg: String, keep: number){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2(){}
/**
     * 闹钟技能_顶部夹子 mode 2=顶部夹子,4=定时满血
     * @出自类 MonsterAPI
     */
闹钟技能_顶部夹子(){}
/**
     * @出自类 成就系统API
*/
finishAchievement(achievementId: number){}
/**
     * 改变家具状态，例如开关灯
     * @出自类 我的小屋API
     */
changeFurnitureState(oid: number, state: number){}
/**
     * @出自类 PlayerAPI
*/
unequip(itemId: number, remove: number){}
/**
     * @出自类 SkillAPI
*/
hasSkill(skillId: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC_Bottom(text: String, diffNPC: number){}
// summon one monster, remote location
spawnMonster(id: number, x: number, y: number){}
/**
     * 获得指定公会
     *
     * @param guildid 公会
     * @return
     * @出自类 PartyAPI
     */
getGuild(guildid: number){}
/**
     * @出自类 ItemAPI
*/
removeAll(id: number, show: number){}
/**
     * @出自类 QuestAPI
*/
isValidQuest(id: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Illus(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * @出自类 主题副本API
*/
乌鲁斯_结算奖励(){}
/**
     * 修改手持的武器的破攻伤害
     *
     * @param amount 伤害，上限为long ≈900亿亿
     * @出自类 ItemAPI
     */
changeLimitBreak(amount: number){}
/**
     * 获得宠物
     * @出自类 PetAPI
     */
gainPet(id: number, quantity: number, name: String){}
/**
     * @出自类 MapEffectAPI
*/
onSetMapObjectMove(key: String, key2: String, v: any){}
/**
     * 在当前位置创建随机传送门，调试用途
     *
     * @param op
     * @param type
     * @出自类 MapEffectAPI
     */
onRandomPortalCreated(op: number, type: number){}
/**
     * 刷怪
     * @出自类 MonsterAPI
     */
spawnMob(id: number, x: number, y: number){}
/**
     * @出自类 主题副本API
*/
克里塞_更新藤蔓(action: number, key: String, value: String){}
/**
     * @出自类 QuestAPI
*/
questMobKilled(id: number, skillID: number){}
/**
     * 重置强制状态，新手剧情使用
     * @出自类 MovieEffectAPI
     */
resetForcedStat(){}
/**
     * @出自类 主题副本API
*/
唐云料理_下一个食材(){}
/**
     * 版本活动，无限怪物挑战，更新积分UI
     *
     * @param score
     * @出自类 版本活动API
     */
版本活动_无限怪物挑战_更新积分(score: number){}
/**
     * 获取玩家角色实例chr
     *
     * @param id
     * @return
     * @出自类 PlayerAPI
     */
getOnlineCharacterById(id: number){return new Character() }
/**
     * 获取玩家称号
     * @出自类 修仙API
     */
getXiuxianname(){}
/**
     * 一系列新特效，大概是镜头移动相关
     *
     * @param type
     * @出自类 MovieEffectAPI
     */
sendNewEffects(type: number, ints: any){}
/**
     * 神之子更换完发型脸型对比UI
     *
     * @param itemId 发型整容染色道具
     * @param 性别     0=男,女=1.通用=2
     * @param 男更换前
     * @param 男更换后
     * @param 女更换前
     * @param 女更换后
     * @出自类 PlayerAPI
     */
神之子更换完发型脸型对比UI(itemId: number, 性别: number, 男更换前: number, 男更换后: number, 女更换前: number, 女更换后: number){}
/**
     * @出自类 SqlAPI
*/
queryForAllResults(sql: String, args: any){}
/**
     * @出自类 贝勒德API
*/
贝勒德_小地图(keys: any, values: any){}
/**
     * 艾尔达瀑布小游戏，开始冲击
     * @出自类 黎曼API
     */
艾尔达瀑布_即将冲击(){}
/**
     * 播放音效
     *
     * @param path 地址，比如 "Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayFieldSound(path: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber_Bottom(text: String, npc: number, defaultNumber: number, min: number, max: number){}
/**
     * 黑色天堂 激战长空
     * @出自类 黑色天堂API
     */
黑色天堂_开始空战(){}
/**
     * 获取城市名字
     * @出自类 PlayerAPI
     */
getMapCityName(id: number){}
/**
     * 对应任务：39377 任务名称： [向导任务]内在能力
     * @出自类 SkillAPI
     */
hasAInnerSkill(){}
/**
     * 内部控制台操作
     * @出自类 ScriptMessageAPI
     */
device(){}
/**
     * 设置玩家日志的次数记录
     *
     * @param name  日志名称
     * @param type  0=永久 other=记录保存时间
     * @param count 次数
     * @出自类 EventAPI
     */
setPlayerLog(name: String, type: number, count: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askText(text: String, defaultText: String, npc: number, minLen: number, maxLen: number, style: number){}
/**
     * 镜头水平移动，需要开启电影模式才有效
     * 

     * 会触发一次status变化
     *
     * @param action 0=移 1=复原
     * @param speed  速度，300≈走路速度
     * @param x      相对X 左负右正
     * @param y      相对Y 上负下正
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_PushMoveInfo(action: number, speed: number, x: number, y: number){}
/**
     * 获得指定物品栏
     *
     * @param type 物品栏类型
     * @return
     * @出自类 ItemAPI
     */
getInventory(type: number){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_莫奈德卷轴风格(npc: number, text: String){}
/**
     * @出自类 PlayerAPI
*/
神之子更换发型整容染色UI(itemId: number, 性别: number, 列表1: any, 列表2: any){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_隐藏头顶图片(tag: String){}
/**
     * 获得随机的精英怪物收藏
     * @出自类 怪物收藏API
     */
gainRandomEliteMobCollection(){}
/**
     * 满当前职业及所有前置职业的技能
     * @出自类 SkillAPI
     */
满技能(){}
/**
     * @出自类 PartyAPI
*/
addCapacityToAlliance(){}
/**
     * @出自类 QuestAPI
*/
setQuestCustomData(customData: String){}
/**
     * 我的小屋，设置名称
     * @出自类 我的小屋API
     */
setMyHomeName(name: String){}
/**
     * @出自类 MapAPI
*/
warp(map: MapleMap, portal: MaplePortal){}
/**
     * @出自类 ReactorActionManager
*/
dispelAllMonsters(num: number){}
/**
     * 自动坐下
     * @出自类 杂项API
     */
SitOnDummyPortableChair(itemId: number, on: number){}
/**
     * 为玩家播放动画，会根据朝向和位置相对播放
     *
     * @see Effect头顶图片Param
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_头顶图片(strs: any, nums: any){}
/**
     * 设置玩家VIP等级
     *
     * @param vip    VIP等级
     * @param period 时间
     * @出自类 CashAPI
     */
setVip(vip: number, period: number){}
/**
     * @出自类 ItemAPI
*/
hasEquipped(itemId: number){}
/**
     * @出自类 ItemAPI
*/
getEquipLevelById(itemId: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_屏幕渐入插图A(strs: any, nums: any){}
/**
     * @出自类 PlayerAPI
*/
setAndroid(args: number){}
/**
     * 给指定团队发点券
     *
     * @param amount 点券
     * @param party
     * @出自类 ItemAPI
     */
givePartyNX(amount: number, party: any){}
/**
     * 强制放弃任务
     * @出自类 QuestAPI
     */
forceForfeitQuest(id: number){}
/**
     * 获得指定地区的随机怪物收藏
     * @出自类 怪物收藏API
     */
gainRandomMobCollectionByRegion(category: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, fh: number, rx0: number, rx1: number, faceLeft: number, canMove: number, fadeInTime: number, forceSpawnNew: number){}
/**
     * 检查是否有团队成员超过了指定账号日志[AccountLog]的次数上限
     *
     * @param name  日志名称，并且选择每日清空类型
     * @param times 次数上限
     * @return 不满足要求的队友的名称列表
     * @出自类 EventAPI
     */
party_CheckFailed_AccountLog(name: String, times: number){}
/**
     * 刷物品
     *
     * @param id          物品
     * @param quantity    数量
     * @param randomStats 是否随机化属性
     * @param period      剩余时间，默认以天为单位
     * @param hours       剩余时间改为以小时为单位
     * @param 升级次数        提升装备的可升级次数
     * @param owner       拥有者
     * @param show        是否反馈
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, randomStats: number, period: number, hours: number, 升级次数: number, owner: String, show: number){}
/**
     * 获取装备栏位的装备ID
     * @出自类 ItemAPI
     */
getItemByPosition(Position: number){}
/**
     * @出自类 PlayerAPI
*/
setDPoints(dpoints: number){}
/**
     * 重复陨石掉落事件，直到没有人
     * @出自类 MapAPI
     */
obstacleFallRepeat(count: number, type: String, delay: number){}
/**
     * 杀死当前地图指定怪物
     *
     * @param ids 怪物
     * @出自类 MonsterAPI
     */
killMob(ids: number){}
/**
     * 强制结束任务，任务脚本里如果最后不执行该指令则无法完成任务
     *
     * @param id 任务
     * @出自类 QuestAPI
     */
forceCompleteQuest(id: number){}
/**
     * 强制移动NPC位置，无视任意落脚点，出现于好友故事音乐比赛、塞尔提乌等
     *
     * @param npc
     * @param x    相对变动X坐标
     * @param y    相对变动Y坐标
     * @param 移动时间 0=不变 其他=移动到指定地点耗时
     * @出自类 NpcAPI
     */
npcMove(npc: number, x: number, y: number, 移动时间: number){}
/**
     * @出自类 V172新复古API
*/
新复古_爬高高_设置完成率(percent: number){}
/**
     * @出自类 ItemAPI
*/
getEquip(itemId: number){}
/**
     * @出自类 ReactorActionManager
*/
getReactor(){return new Reactor() }
/**
     * @出自类 JobAPI
*/
getMasteryBooksByJob(job: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNext_Illus(text: String, diffNPC: number){}
// summon monsters on reactor location
spawnMonster(id: number, qty: number){}
/*
    是否开放修仙
     * @出自类 修仙API
     */
getXiuxian(){}
/**
     * 荣耀活动_塞尔提乌城墙_阻止怪物海鸥倒计时
     *
     * @param time 单位 s
     * @出自类 V168荣耀API
     */
getClockCerniumBird(time: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askPet(text: String){}
/**
     * 新键AI机器人数据
     *
     * @param 性别
     * @出自类 PlayerAPI
     */
模拟玩家(性别: number){}
/**
     * @出自类 版本活动API
*/
黄金马车_初始化(quest: number, ui: number){}
/**
     * 在控制台输出文本
     *
     * @param test 文本
     * @出自类 ToolAPI
     */
test(test: String){}
/**
     * 显示副本技能，出现于莫奈德Act2追逐战
     *
     * @param v1
     * @param v2
     * @出自类 UserInterfaceAPI
     */
onActionBarResult(v1: number, v2: number){}
/**
     * 获得随机的怪物收藏
     * @出自类 怪物收藏API
     */
gainRandomMobCollection(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevNoESC(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineNoESC(text: String, diffNPC: number){}
/**
     * 荣耀活动，激战海洋，显示结算UI
     * @出自类 V168荣耀API
     */
gloryRagingSeaReward(score: number, rank: number){}
/**
     * @出自类 PartyAPI
*/
disbandGuild(){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber_Bottom(text: String, npc: number, defaultNumber: number, min: number, max: number, style: number){}
/**
     * @param sql       脚本
     * @param operation 核心操作接口，对给入的PreparedStatement进行操作
     * @出自类 SqlAPI
     */
batchUpdateSQL(sql: String, operation: any){}
/**
     * 读取在线时间
     *
     * @return
     * @出自类 PlayerAPI
     */
getGamePoints(){}
/**
     * @出自类 PlayerAPI
*/
isAI智能机器人(){}
/**
     * 强制开始任务，任务脚本里如果最后不执行该指令则无法开始任务
     *
     * @param id         任务
     * @param customData 对应wz里没有关联到exVariable的value，不少任务、NPC变动依赖特定任务的CustomData值
     * @param siliently  避免系统任务等情况触发后续对话
     * @出自类 QuestAPI
     */
forceStartQuest(id: number, customData: String, siliently: number){}
/**
     * 泰捏布利斯，痛苦迷宫地图事件
     * @出自类 痛苦迷宫API
     */
enterMaze(){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_神之子双人美容(costItem: number, avatarsAlpha: any, avatarsBeta: any){}
/**
     * 冒险岛英雄，变成指定NPC模样
     * 

     * 注意：如果在正常情况下触发了参数(-1,1) 会导致键盘被清空！
     *
     * @param npc    -1=恢复原样
     * @param action 0=不切换键盘 1=切换键盘
     * @出自类 冒险岛英雄API
     */
mapleHeroBecomeNpc(npc: number, action: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_SetObjectState(path: String){}
/**
     * @出自类 V172新复古API
*/
新复古_爬高高_更新排行榜(){}
/**
     * 全域掉宝倍率
     * @出自类 PlayerAPI
     */
getGlobalDropRate(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNormalTalk_Illus(text: String, diffNPC: number, style: number, pre: number, next: number, isLeft: number){}
/**
     * @出自类 凯梅尔兹航海API
*/
凯梅尔兹航海_结束(){}
/**
     * 荣耀活动，支援塞尔提乌，解救骑士团，设置倒计时
     * @出自类 V168荣耀API
     */
glorySaveKnightsTime(action: number, time: number){}
/**
     * @出自类 MapAPI
*/
scheduleWarpTask(time: number, to: number, portal: number, show: number, fadeOut: number){}
/**
     * 传送到指定地点
     *
     * @param map    地图
     * @param portal 传送门
     * @param fadeIn 冻结淡入效果
     * @出自类 MapAPI
     */
warp(map: number, portal: number, fadeIn: number){}
/**
     * @出自类 MonsterAPI
*/
spawnMonster(id: number, qty: number){}
/**
     * 我的小屋，获得访问模式
     * @出自类 我的小屋API
     */
getMyHomeAccessMode(){}
/**
     * set神之子脸型
     *
     * @param 性别
     * @param 男脸型ID
     * @param 女脸型ID
     * @出自类 PlayerAPI
     */
set神之子脸型(性别: number, 男脸型ID: number, 女脸型ID: number){}
/**
     * 顶部信息-自定义字型 0=白色 1=黑色 2=灰黄 3=灰色 4=黄色 5=蓝色 6=青色 7=红色 8=绿色 9=粉色 10=橘色 11=玫红
     * 12=灰蓝 13=梅红 14=墨绿 15=淡紫 16=亮青 17=灰色 18= 20=亮绿
     *
     * @param msg
     * @param nFont//字体           3、4、5是黑体 其他宋体
     * @param nFontSizeType//字体大小 25
     * @param nFontColorType//    字体颜色
     * @param nFadeOutDelay//     淡出延迟
     * @出自类 MessageAPI
     */
getTopMsgFont(msg: String, nFont: number, nFontSizeType: number, nFontColorType: number, nFadeOutDelay: number, b1: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Illus(text: String, diffNPC: number){}
/**
     * 传送玩家所在团队到指定地点
     * @出自类 MapAPI
     */
warpParty(mapId: number){}
/**
     * @出自类 QuestAPI
*/
setQuestCustomData(quest: number, data: String){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, x: number, y: number, faceLeft: number){}
/**
     * 打开商店
     * @出自类 NpcAPI
     */
openShop(id: number){}
/**
     * 显示新品种UI，以字符串区分 如：我的小屋管家，日冕活动菜单
     *
     * @param mode 开关
     * @param name 字符串
     * @出自类 UserInterfaceAPI
     */
openNewUI(mode: number, name: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Bottom(text: String){}
/**
     * 镜头缩放结合移动，需要开启电影模式才有效
     * 

     * 会触发一次status变化
     *
     * @param moveTime 移动耗时
     * @param ratio    缩放比例，标准1000，越大越放大
     * @param playTime 动画耗时，时间到后结束
     * @param x        地图x
     * @param y        地图y
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_PushScaleInfo(moveTime: number, ratio: number, playTime: number, x: number, y: number){}
/**
     * @出自类 MessageAPI
*/
topMsgByItem(itemId: number, message: String){}
/**
     * @出自类 成就系统API
*/
gainSubAchievement(achievementId: number, sub: number){}
/**
     * 刷怪，指定等级
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param level 等级
     * @param x
     * @param y
     * @出自类 MonsterAPI
     */
spawnMobLevel(mobId: number, quantity: number, level: number, x: number, y: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk_Bottom(text: String){}
/**
     * 荣耀活动_扫荡黑太阳_解救居民，魔法攻击A
     * @出自类 V168荣耀API
     */
cerniumSaveResidentMagicAttackA(){}
/**
     * 直接获取指定经验值
     * @出自类 PlayerAPI
     */
gainExp(exp: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Illus(text: String, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineSNoESC_Bottom(text: String, diffNPC: number){}
/**
     * 移除团队里所有玩家背包里指定物品的所有数量
     *
     * @param id    物品ID
     * @param party 团队
     * @出自类 ItemAPI
     */
removeFromParty(id: number, party: any){}
/**
     * 要求输入文本_特殊UI
     * @出自类 ScriptMessageAPI
     */
askTextSpecialUI(head: number, npc: number, uiType: number, defaultText: String, 每行最大字数: number, 最大行数: number, 字体大小: number, 行间距: number){}
/**
     * 给当前地图隐藏指定NPC
     *
     * @param npcId
     * @出自类 NpcAPI
     */
hideNpc(npcId: number){}
/**
     * 改变所有召唤出来的宠物的颜色
     *
     * @param hue 宠物颜色， 如果要还原颜色的话设置为0
     * @出自类 PetAPI
     */
changePetHue(hue: number){}
// 每日报到系统
MissionStatus(charid: number, missionid: number, maxtimes: number, checktype: number){}
/**
     * @出自类 外星异次元API
*/
外星异次元_显示UI(show: number){}
/**
     * 清除在线时间
     * @出自类 PlayerAPI
     */
resetGamePoints(){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC(text: String, diffNPC: number){}
/**
     * 随机设置一个皮肤、脸型、发型，不适用于神之子、爆莉萌天使
     * @出自类 PlayerAPI
     */
setRandomAvatar(ticket: number, args_all: number){}
/**
     * 打开网页浏览器，新接口
     *
     * @param web 网址
     * @出自类 UserInterfaceAPI
     */
openWebNew(b1: number, b2: number, web: String){}
/**
     * @出自类 PlayerAPI
*/
sendPendant(b: number){}
/**
     * 开启黑夜模式，开启后屏幕变黑，只有周围有光
     *
     * @param dark
     * @出自类 MovieEffectAPI
     */
effect_Lightness(dark: number){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getPlayer(){return new Character() }
/**
     * 强制覆盖装备
     * @出自类 ItemAPI
     */
forceSetEquipment(id: number, slot: number){}
/**
     * 添加跟随玩家的伙伴
     * 

     * 注意！可跟随的伙伴种类非常有限，具体最好查询String.wz里skill.xml的翻译，搜索“伙伴”
     *
     * @param show     是否开启
     * @param dwNPCID  NPC的ID，似乎没有用
     * @param nSkillID 伙伴技能ID，决定伙伴NPC是谁
     * @param nCount   召唤数量
     * @出自类 MovieEffectAPI
     */
setPartner(show: number, dwNPCID: number, nSkillID: number, nCount: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askText(text: String, npc: number){}
/**
     * 开启拍照模式
     *
     * @param b1   是否启用
     * @param b2
     * @param npcs 目标NPC
     * @param mobs 目标怪物
     * @param d
     * @param e    命中效果 -1=照相机
     * @param f    瞄准图标 -1=照相机
     * @param b3   拍照模式
     * @出自类 MovieEffectAPI
     */
openCamera(b1: number, b2: number, npcs: any, mobs: any, d: number, e: number, f: number, b3: number){}
/**
     * @出自类 SqlAPI
*/
queryForBean(sql: String, requiredType: any, args: any){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC_Illus(text: String){}
/**
     * @出自类 CashAPI
*/
魔女森林(){}
/**
     * 获取系统称号
     * @出自类 修仙API
     */
getXiuxianname(amuont: number){}
// 获取可以兑换的点数为
MissionGetMinNum(charid: number, missionid: number, mobid: number){}
/**
     * @出自类 PartyAPI
*/
warpPartyWithExp(mapId: number, exp: number){}
/**
     * 荣耀活动，魔法泥人修炼场，更新UI
     *
     * @param type 类型
     * @param v1   类型2=启停计时器 类型1=阶段提升 类型2=积分增加 类型3=怪物OID
     * @param v2   怪物积分
     * @出自类 V168荣耀API
     */
gloryMagicMudmanUI(type: number, v1: number, v2: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askText_Bottom(text: String, defaultText: String, npc: number, minLen: number, maxLen: number, style: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoNoESC_Illus(text: String){}
/**
     * 判断是否 已经注册过修仙
     * @出自类 修仙API
     */
isRegistedXiuxian(){}
/**
     * @出自类 MapAPI
*/
scheduleOpenNpcTask(time: number, npc: number, filename: String){}
/**
     * 增加团队所有成员的日志次数记录
     *
     * @param name  日志名称
     * @param count 次数
     * @param type  0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
party_addAccountLog(name: String, count: number, type: number){}
/**
     * 播放音效
     *
     * @param broadcast 是否广播
     * @param path      地址，比如 "Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayFieldSound(broadcast: number, path: String){}
/**
     * 学会技能
     *
     * @param skillId     技能
     * @param skilllevel  等级
     * @param masterlevel
     * @出自类 SkillAPI
     */
teachSkill(skillId: number, skilllevel: number, masterlevel: number){}
/**
     * @出自类 BasicParamAPI
*/
getNpc(){}
/**
     * 更新深渊远征队的倒计时并显示UI。仅在深渊内有效
     * @出自类 V180深渊远征队API
     */
深渊远征队_更新倒计时(){}
/**
     * 在玩家当前位置掉落物体
     * @出自类 ToolAPI
     */
dropSingleItem(itemId: number){}
/**
     * @出自类 MapEffectAPI
*/
onSetBackEffectSchedule(map: String, 数组数量: number, 动作: number, v3: number, v4: number, interval: number, delay: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAngelicBuster(){}
/**
     * 出现于起源之塔第二层，可以持续存在
     *
     * @param str0
     * @param v1
     * @param v2
     * @param v3
     * @出自类 MovieEffectAPI
     */
effect_LastingEff(str0: String, v1: number, v2: number, v3: number){}
/**
     * @param path
     * @param value0 音量
     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayFieldSound(path: String, value0: number){}
/**
     * 重复的显示图片？
     *
     * @param str0 路径
     * @出自类 MovieEffectAPI
     */
effect_REPEAT(str0: String, v1: number, v2: number, v3: number, v4: number, v5: number){}
/**
     * 按逗号分隔数值
     *
     * @param num 支持 Long
     * @return "1,234"
     * @出自类 ToolAPI
     */
formatNumberWithComma(num: number){}
/**
     * @出自类 ItemAPI
*/
forceUpdateItem(item: any){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_ProcessOnOffLayer(tag: String, path: String, operation: number, loadTime: number, x: number, y: number, value4: number, dimension: number, value6: number){}
/**
     * @出自类 ItemAPI
*/
scrollItem(scroll: number, item: number){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_升级(nextRank: number, coin: number){}
/**
     * @param skill       生活技能ID
     * @param resultLevel 0~3，对应B、C、A、A+
     * @param exp         经验值
     * @param levelup     是否给出升级提示
     * @return
     * @出自类 JobAPI
     */
zeroLearnProfessionSkill(skill: number, resultLevel: number, exp: number, levelup: number){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_获得联盟币(coin: number){}
/**
     * 角色执行技能动作
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_OneTimeAction(action: String, time: number){}
/**
     * 玩具塔箱子瞬移特效
     * @出自类 MapEffectAPI
     */
Effect_Mulung(){}
/**
     * NPC淡入
     *
     * @param fadeIn
     * @出自类 NpcAPI
     */
setNPC_Fadein(npcId: number, fadeIn: number){}
/**
     * 获得随机的一星怪物收藏
     * @出自类 怪物收藏API
     */
gainRandomNormalMobCollection(){}
/**
     * 获取金币倍率
     * @出自类 PlayerAPI
     */
getMesoRate(){}
/**
     * 检查玩家是否拥有足够物品
     *
     * @param itemId          物品
     * @param quantity        数量
     * @param checkEquipped   是否检查已装备的
     * @param greaterOrEquals 是否开启大于等于模式
     * @return
     * @出自类 ItemAPI
     */
haveItem(itemId: number, quantity: number, checkEquipped: number, greaterOrEquals: number){}
// 删除报道次数
MissionDelete(charid: number, missionid: number){}
/**
     * 增加团队所有成员的日志次数记录，每日清空
     *
     * @param name  日志名称
     * @param count 次数
     * @出自类 EventAPI
     */
party_addAccountLog(name: String, count: number){}
/**
     * 检查当前地图是否有目标怪物
     *
     * @param mobid 怪物
     * @return
     * @出自类 MonsterAPI
     */
haveMonster(mobid: number){}
/**
     * 强制玩家移动，玩家不可操作，出现于莫奈德阿布鲁大篷车
     * @出自类 莫奈德API
     */
monadForceMove(s: String, v1: number, time: number){}
/**
     * 开始任务相关的倒计时，显示在头上
     *
     * @param action 1=开始
     * @param quest
     * @param time   单位毫秒
     * @出自类 QuestAPI
     */
startQuestClock(action: number, quest: number, time: number){}
/**
     * @出自类 CashAPI
*/
gainGachaponItem(id: number, quantity: number, msg: String, rareness: number, buy: number, period: number){}
/**
     * 同步角色任务信息到账户，相当于简易账户数据库
     * @出自类 QuestAPI
     */
synchToAccountQuestInfo(questInfo: number){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_显示酒馆成员(){}
/**
     * @出自类 ToolAPI
*/
getCharacterList(){}
/**
     * @出自类 MonsterAPI
*/
spawnMobStats(mobId: number, quantity: number, newhp: number, newExp: number){}
/**
     * @出自类 SkillAPI
*/
hasBuff(skillId: number){}
/**
     * @出自类 NpcAPI
*/
npc_ChangeController(npcid: number, npcTag: String, x: number, y: number, faceLeft: number, canMove: number, forceSpawnNew: number, avatar: any){}
/**
     * 我的小屋，设置访问权限
     * @出自类 我的小屋API
     */
setMyHomeAccessMode(mode: number){}
/**
     * 全屏幕播放预设好的音画组合，注意此时目录不会在effect下面
     *
     * @param data 动画地址，如"Effect/Direction9.img/KaiserTutorial/Scene0"
     * @出自类 MovieEffectAPI
     */
effect_Direction(data: String){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_InsertCanvas11(value0: number, value1: number, value2: number, value3: number, value4: number, value5: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk(text: String, style: number, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Bottom(text: String, style: number, diffNPC: number, bottomSytle: number){}
/**
     * 检查是否有团队成员超过了指定玩家日志[PlayerLog]的次数上限
     *
     * @param name  日志名称，并且选择每日清空类型
     * @param times 次数上限
     * @param type  日志类型，0=永久 other=记录保存时间
     * @return 不满足要求的队友的名称列表
     * @出自类 EventAPI
     */
party_CheckFailed_PlayerLog(name: String, times: number, type: number){}
/**
     * 修改装备栏指定位置指定装备指定条目为指定潜能类型
     *
     * @param slot    装备栏指定位置
     * @param potline 指定条目，1~6
     * @param potId   指定潜能类型ID
     * @param show    是否广播
     * @出自类 ItemAPI
     */
changePotential(slot: number, potline: number, potId: number, show: number){}
/**
     * @出自类 ToolAPI
*/
getChannelServer(){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_屏幕渐入插图B(strs: any, nums: any){}
/**
     * @出自类 MonsterAPI
*/
spawnMobStats(mobId: number, quantity: number, newhp: number, newExp: number, x: number, y: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askPet(text: String, npc: number){}
/**
     * 刷物品
     *
     * @param id       物品
     * @param quantity 数量
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number){}
/**
     * 打开网页浏览器
     *
     * @param web 网址
     * @出自类 UserInterfaceAPI
     */
openWeb(web: String){}
/**
     * @出自类 ToolAPI
*/
getReadableMillis(startMillis: number, endMillis: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineS_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNext(text: String){}
/**
     * @see FieldEffect复合图片动画Param
     * @出自类 MovieEffectAPI
     */
fieldEffect_复合图片动画(strs: any, nums: any){}
/**
     * 同步账户任务信息到角色，相当于简易账户数据库
     * @出自类 QuestAPI
     */
synchFromAccountQuestInfo(questInfo: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_Clear(path: String){}
/**
     * @出自类 PlayerAPI
*/
equip(itemId: number, slot: number, add: number){}
/**
     * @出自类 ToolAPI
*/
getCharacterName(characterid: number){}
/**
     * 增加技能点
     *
     * @param amount 数量，可正可负
     * @出自类 PlayerAPI
     */
gainSp(amount: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDeclineSNoESC_Bottom(text: String){}
/**
     * 读取当前升级所需经验
     *
     * @return
     * @出自类 PlayerAPI
     */
getExpNeededForLevel(){}
/**
     * 给玩家触发指定NPC的对话脚本
     * 

     * 模式=0
     *
     * @param npc NPC的ID
     * @出自类 NpcAPI
     */
openNpc(npc: number){}
/**
     * 更新玩家的指定任务的 Info，常用于exVariable指定的任务状态标记，也用于永久性数据存储
     *
     * @param id   任务
     * @param data 数据
     * @出自类 QuestAPI
     */
updateInfoQuest(id: number, data: String){}
/**
     * @出自类 PartyAPI
*/
partyHaveItem(itemId: number, quantity: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoS(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkS_Bottom(text: String){}
/**
     * @出自类 MovieEffectAPI
*/
effect_NormalSpeechBalloon(data: String, borderStyle: number, colorStyle: number, nameHeight: number, time: number, v5: number, v6: number, v7: number, v8: number, v9: number, npcID: number, npcTag: String, playerID: number){}
/**
     * 保存玩家当前地点，用于自由市场这种传送
     *
     * @param loc 地点
     * @出自类 PlayerAPI
     */
saveLocation(loc: String){}
/**
     * @出自类 MonsterAPI
*/
spawnMobStats(mobId: number, quantity: number, newhp: number, newExp: number, pos: any){}
/**
     * @出自类 PlayerAPI
*/
expandInventory(type: number, amt: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_屏幕渐入插图消失B(strs: any, nums: any){}
/**
     * 浮在玩家头上的文本，浅灰色背景
     *
     * @param msg    说话内容
     * @param width  固定宽度
     * @param height 固定高度
     * @出自类 MessageAPI
     */
balloonMsg(msg: String, width: number, height: number){}
/**
     * 包裹满了吗
     *
     * @return
     * @出自类 ItemAPI
     */
canHold(){}
/**
     * QuestInfo 设置指定数值
     * @出自类 QuestAPI
     */
setNumberForQuestInfo(questId: number, key: String, num: number){}
/**
     * 神之子更换发型整容染色UI
     *
     * @param itemId 发型整容染色道具
     * @param 性别     男=0,女=1,通用=2
     * @param 列表1    所有的发型整容染色ID
     * @出自类 PlayerAPI
     */
神之子更换发型整容染色UI(itemId: number, 性别: number, 列表1: any){}
/**
     * 荣耀活动，激战中的乱港
     *
     * @param type
     * @param args
     * @出自类 V168荣耀API
     */
gloryWildWater(type: number, args: any){}
/**
     * 倾斜视角，出现于莫奈德Act2追逐战
     *
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
onCameraTilt(v1: number, v2: number){}
/**
     * 命令由 npc_ChangeController() 控制的NPC进行移动 
     * 

     *
     * @param npcTag    NPC的标签，用于区分多个相同ID。
     * @param direction 方向，1=右，-1=左
     * @param distance  移动距离
     * @param speed     移动速度
     * @出自类 NpcAPI
     */
npc_SetForceMove(npcTag: String, direction: number, distance: number, speed: number){}
/**
     * 结束任务相关的倒计时，显示在头上
     *
     * @param action 1=开始
     * @param quest
     * @出自类 QuestAPI
     */
endQuestClock(action: number, quest: number){}
/**
     * 增加团队所有成员的日志次数记录，每日清空
     *
     * @param name  日志名称
     * @param count 次数
     * @出自类 EventAPI
     */
party_addPlayerLog(name: String, count: number){}
/**
     * 强制开始当前任务
     * @出自类 QuestAPI
     */
forceStartQuest(){}
/**
     * 拟真机器人，传送到玩家身边
     * @出自类 V171拟真机器人API
     */
teleport拟真机器人(x: number, y: number){}
/**
     * 一键生成任务脚本
     * @出自类 ToolAPI
     */
genQuestScript(start: number, end: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevSNoESC(text: String){}
/**
     * 【描述】修改左上角的STAGE UI的数量
     * 

     * 【出现场景】莫奈德Act2粉红围攻 / 活动_悬赏狩猎
     * 

     * @出自类 UserInterfaceAPI
     */
uiChangeStage(stage: number){}
/**
     * @出自类 PartyAPI
*/
displayGuildRanks(){}
/**
     * 【类型】普通对话
     * 

     * 【参数】boolean prev, boolean next
     * 

     * prev -> 下一页
     * 

     * prev + next -> 下一页+上一页
     * 

     * 两者皆无 -> 确认
     * 

     * @出自类 ScriptMessageAPI
     */
sendNormalTalk(text: String, style: number, diffNPC: number, prev: number, next: number){}
/**
     * @出自类 PyramidAPI
*/
start_PyramidSubway(pyramid: number){}
/**
     * 异逝界，更改本地物体的状态
     * @出自类 异逝界API
     */
afterlandChangeMapObject(name: String, b0: number, show: number, duration: number, b2: number, angle: number, v2: number, b3: number){}
/**
     * 荣耀活动，激战海洋，显示UI
     * @出自类 V168荣耀API
     */
gloryRagingSeaStart(){}
/**
     * 获得玩家当前所在事件的EventManager
     * @出自类 EventAPI
     */
getEventInstance(){return new EventManager() }
/**
     * @出自类 PlayerAPI
*/
加入队伍(){}
/**
     * 获得装备栏指定道具
     *
     * @param slot 格子位置
     * @return 装备
     * @出自类 ItemAPI
     */
getEquipBySlot(slot: number){}
/**
     * 每次放动画的开头结尾都要调用
     *
     * @param enabled
     * @出自类 MovieEffectAPI
     */
curNodeEventEnd(enabled: number){}
/**
     * set神之子女脸型
     *
     * @param 脸型ID
     * @出自类 PlayerAPI
     */
set神之子女脸型(脸型ID: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Bottom(text: String, style: number, diffNPC: number, bottomSytle: number){}
/**
     * @出自类 ReactorActionManager
*/
dropItems(meso: number, mesoChance: number, minMeso: number, maxMeso: number){}
/**
     * @出自类 ToolAPI
*/
checkDrop(mobId: number){}
/**
     * @出自类 PlayerAPI
*/
是否启用AI脚本功能(){}
/**
     * 神之子刷新女脸型
     *
     * @param ID
     * @出自类 PlayerAPI
     */
神之子刷新女肤色(ID: number){}
/**
     * 每次进入大本营地图都要发送
     * @出自类 V180深渊远征队API
     */
深渊远征队_加载数据(){}
/**
     * @出自类 成就系统API
*/
updateAchievement(achievementId: number, sub: number, cur: number, goal: number){}
/**
     * QuestInfo 增加某一项的数值
     * 举例：cm.addNumberForQuestInfo(1477,'count',10); 增加10点核心碎片
     * @param diff 增幅
     * @出自类 QuestAPI
     */
addNumberForQuestInfo(questId: number, key: String, diff: number){}

/**
     * @出自类 PartyAPI
*/
givePartyExp_PQ(maxLevel: number, mod: number, party: any){}
/**
     * @出自类 PlayerAPI
*/
faceExists(face: number){}
/**
     * @出自类 ToolAPI
*/
rand(nums: any){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Bottom(text: String, style: number, diffNPC: number, bottomSytle: number){}
/**
     * 神之子读书列表
     *
     * @param count
     * @出自类 JobAPI
     */
zeroReadBook(count: number){}
/**
     * 添加跟随玩家的伙伴，进阶版，出现于莫奈德
     *
     * @param pPartner
     * @param dwNPCID
     * @param nSkillID
     * @param x
     * @param y
     * @param end
     * @出自类 MovieEffectAPI
     */
setPartnerAction(pPartner: number, dwNPCID: number, nSkillID: number, x: number, y: number, end: number){}
/**
     * @出自类 PlayerAPI
*/
setEPoints(epoints: number){}
/**
     * 给玩家发送通知
     *
     * @param message 消息
     * @see #playerMessage(int type, String message)
     * @出自类 MessageAPI
     */
playerMessage(message: String){}
/**
     * 是否满足开始任务的条件
     *
     * @param id
     * @return
     * @出自类 QuestAPI
     */
canStartQuest(id: number){}
/**
     * @出自类 NpcAPI
*/
openShopNPC(id: number){}
/**
     * 塞尔提乌城墙，闪电防御战，反应堆能量积累
     * @出自类 V168荣耀API
     */
cerniumLightningDefenseReactorEnergy(energy: number){}
/**
     * 获取活动事件（过时）
     * @出自类 EventAPI
     */
getEvent(loc: String){}
/**
     * 改变地图背景，出现于莫奈德大篷车环节
     *
     * @param map
     * @param 数组数量
     * @param 动作
     * @param v3
     * @param v4
     * @出自类 MapEffectAPI
     */
onSetBackEffect(map: String, 数组数量: number, 动作: number, v3: number, v4: number){}
/**
     * 暂停画面一段时间
     *
     * @param value0 ？=0
     * @param value1 锁定画面时间 单位ms
     * @param value2 淡出锁定时间 单位ms
     * @param value3 ？=1
     * @出自类 MovieEffectAPI
     */
OverlapScreenDetail19(value0: number, value1: number, value2: number, value3: number){}
/**
     * 不知道为什么 4F的陷阱传送点全部无法触发，只能人肉触发了
     * @出自类 起源之塔API
     */
起源之塔_4F陷阱(){}
/**
     * @出自类 BasicParamAPI
*/
getPlayer(){return new Character() }
/**
     * 获得玩家实例
     *
     * @return
     * @出自类 PlayerAPI
     */
getPlayer(){return new Character() }
/**
     * @出自类 PlayerAPI
*/
gainExp_PQ(maxLevel: number, mod: number){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getClient(){}
/**
     * @出自类 PlayerAPI
*/
活动_头顶邀请函(任务ID: number){}
/**
     * 塞尔提乌城墙，闪电防御战，开始
     * @出自类 V168荣耀API
     */
cerniumLightningDefenseStart(){}
/**
     * @出自类 PlayerAPI
*/
AI使用椅子(chr: Character, itemId: number, on: number){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getScript(){}
/**
     * 神之子男发型
     *
     * @param 男发型ID
     * @出自类 PlayerAPI
     */
set神之子男发型(男发型ID: number){}
/**
     * 获得指定怪物的收藏
     *
     * @param mobId 怪物ID
     * @出自类 怪物收藏API
     */
gainOneMobCollection(mobId: number){}
/**
     * @出自类 SkillAPI
*/
满技能(job: number){}
/**
     * @出自类 NpcAPI
*/
npc_SetSpecialAction(npcTag: String, action: String, i: number){}
/**
     * 给玩家发送通知
     *
     * @param type    通知类型：
     * 

     *                -1 = 红色正中提示，过几秒会淡出消失
     * 

     *                1 = 弹窗提示，需要点击确认才能取消
     * 

     *                2 = 蓝底系统提示，出现在聊天框
     * 

     *                3 = (null)红底系统提示，出现在聊天框
     * 

     *                5 = 红色系统提示，出现在聊天框
     * 

     *                6 = 蓝色系统提示，出现在聊天框
     * 

     *                -6 = 灰色系统提示，出现在聊天框
     * 

     *                -7 = 黄色系统提示，出现在聊天框
     * 

     * @param message 消息
     * @出自类 MessageAPI
     */
playerMessage(type: number, message: String){}
/**
     * 播放Voice下的对话类音效
     * 

     * 其实功能有点重复
     *
     * @param data 地址，如"Voice.img/flowervioleta/mc/0"
     * @出自类 MovieEffectAPI
     */
effect_Voice(data: String){}
/**
     * NPC淡出
     *
     * @param npcTag
     * @param value0
     * @param value1
     * @出自类 NpcAPI
     */
Npc_Fadeout(npcTag: String, value0: number, value1: number){}
/**
     * @出自类 ItemAPI
*/
getSpace(type: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextSNoESC_Bottom(text: String){}
// summon one monster on reactor location
spawnMonster(id: number){}
/**
     * 清空账号日志的次数记录，类型为 每日清空
     *
     * @param name 日志名称
     * @出自类 EventAPI
     */
resetAccountLog(name: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrev_Illus(text: String, diffNPC: number){}
/**
     * 荣耀活动，支援塞尔提乌，解救骑士团，设置骑士状态
     *
     * @param act 0=死亡 1=正常 2=受到暗杀
     * @param id  骑士编号 0~4
     * @出自类 V168荣耀API
     */
glorySaveKnightsState(act: number, id: number){}
/**
     * @出自类 MapAPI
*/
obstacleFallRepeat(count: number, typeMinId: number, typeMaxId: number, delay: number){}
/**
     * @出自类 PlayerAPI
*/
随机发型(player: Character){}
/**
     * 设置玩家VIP等级
     *
     * @param vip VIP等级
     * @出自类 CashAPI
     */
setVip(vip: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber(text: String, npc: number, defaultNumber: number, min: number, max: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNext(text: String, style: number, diffNPC: number){}
/**
     * @出自类 主题副本API
*/
组队任务_更新任务(action: number, key: String, value: String, b1: number){}
/**
     * 获得活动技能。最新出处为荣耀活动
     * @出自类 版本活动API
     */
eventSKill(value0: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextS_Bottom(text: String, diffNPC: number){}
/*
     刷新人物
     * @出自类 ToolAPI
     */
fakeRelog(){}
/**
     * 强制触发反应堆
     *
     * @param mapId 地图
     * @param id    反应堆
     * @出自类 MapAPI
     */
hitReactor(mapId: number, id: number){}
/**
     * @出自类 PartyAPI
*/
givePartyExp_PQ(maxLevel: number, mod: number){}
/**
     * 显示说话气泡，在自己头上
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @出自类 MovieEffectAPI
     */
effect_NormalSpeechBalloon(data: String, borderStyle: number){}
/**
     * @出自类 PlayerAPI
*/
setLevel(Level: number){}
/**
     * @出自类 UserInterfaceAPI
*/
openPackageDeliverer(){}
/**
     * @出自类 MapEffectAPI
*/
Hidden_background(str: String, type: number, on: number){}
/**
     * 包裹能不能放得下物品
     *
     * @param itemId   物品
     * @param quantity 数量
     * @return
     * @出自类 ItemAPI
     */
canHold(itemId: number, quantity: number){}
/**
     * @出自类 MovieEffectAPI
*/
cameraSwitch_PushSwitchMoveInfo(str0: String, value0: number){}
/**
     * @出自类 JobAPI
*/
changeJobById(job: number){}
/**
     * 家具栏位扩展
     * @出自类 我的小屋API
     */
addMaxFurnitureSlot(gain: number){}
/**
     * @出自类 PlayerAPI
*/
gainAp(amount: number){}
//【上一步】【下一步】
sendNextPrev(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNoS_Bottom(text: String, diffNPC: number){}
/**
     * 增加账号日志的次数记录，默认+1，会每日清空
     *
     * @param name 日志名称
     * @出自类 EventAPI
     */
addAccountLog(name: String){}
/**
     * 改变账户共享任务的信息
     * @出自类 QuestAPI
     */
setStringForAccountQuestInfo(questId: number, key: String, val: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevNoESC_Illus(text: String, diffNPC: number){}
/**
     * 设置地图物体效果
     *
     * @param str
     * @param value
     * @出自类 MapEffectAPI
     */
setSpineObjectEffect(str: any, value: any){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_PlaySummonSound(value0: number, value1: number, value2: number){}
/**
     * @出自类 NpcAPI
*/
npc_SetSpecialAction(npcid: number, action: String, i: number){}
/**
     * 塞尔提乌城墙，闪电防御战，个人能量积累
     * @出自类 V168荣耀API
     */
cerniumLightningDefensePlayerEnergy(energy: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo(text: String, diffNPC: number){}
/**
     * 显示说话气泡，在自己头上
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @param colorStyle  0=黑边白底 1=金框粉底（只有普通风格）
     * @出自类 MovieEffectAPI
     */
effect_NormalSpeechBalloon(data: String, borderStyle: number, colorStyle: number){}
/**
     * @出自类 MapAPI
*/
scheduleWarpTask(time: number, to: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendPrevNoESC(text: String, diffNpcID: number){}
/**
     * 根据名称或者ID来模糊匹配
     *
     * @param type   搜索类型 {@link org.bms.common.enums.keepnames.SearchUtilType}
     * @param search 关键词
     * @return 带有完整格式的对话文本
     * @出自类 SearchAPI
     */
searchForText(type: number, search: String){}
/**
     * 获得声望的经验值
     *
     * @param gain
     * @param show
     * @出自类 PlayerAPI
     */
gainHonorExp(gain: number, show: number){}
/**
     * 用于击败塞伦时的成就检查等
     * @出自类 ItemAPI
     */
装备创世武器(){}
/**
     * 关闭UI
     * @出自类 UserInterfaceAPI
     */
closeUI(type: number){}
/**
     * 塞尔提乌城墙，破坏攻城武器，开始
     * @出自类 V168荣耀API
     */
cerniumMagicBombStart(){}
/**
     * @出自类 NpcAPI
*/
setNPCNoticeBoardInfo(npcTag: String, nNoticeBoardType: number, nNoticeBoardValue: number){}
/**
     * @出自类 SqlAPI
*/
updateSQL(sql: String, args: any){}
/**
     * @出自类 SkillAPI
*/
giveMountSkill(itemId: number, mountSkillId: number, period: number, test: number){}
/**
     * 获得当前玩家公会
     *
     * @return
     * @出自类 PartyAPI
     */
getGuild(){}
/**
     * @出自类 ScriptMessageAPI
*/
askNumber(text: String, npc: number, defaultNumber: number, min: number, max: number, style: number){}
// 画面移动
inGameDirectionEvent_PushScaleInfo(str0: String, value0: number, value1: number){}
/**
     * 显示指定UI
     * @出自类 UserInterfaceAPI
     */
openUI(type: number){}
/**
     * 显示说话气泡，在自己头上
     *
     * @param data 内容
     * @出自类 MovieEffectAPI
     */
effect_NormalSpeechBalloon(data: String){}
/**
     * 清空账号日志的次数记录
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
resetAccountLog(name: String, type: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askText_Bottom(text: String, npc: number){}
/**
     * @出自类 BasicParamAPI
*/
getClient(){}
/**
     * 异逝界，勇士之地，头顶显示剩余怪物数量
     * @出自类 异逝界API
     */
afterlandKillStage(stage: number){}
/**
     * @出自类 MapEffectAPI
*/
dynamicObjMoveSchedule(x1: number, y1: number, x2: number, y2: number, n1: number, n2: number, r: number, start: number, speed: number, name: String, interval: number, delay: number){}
//【选择菜单】
askMenu(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askAcceptDecline_Illus_II(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * 给玩家所在团队发放物品，可正可负
     *
     * @param id       物品
     * @param quantity 数量
     * @see #givePartyItems(int, short, boolean)
     * @出自类 ItemAPI
     */
givePartyItems(id: number, quantity: number){}
/**
     * 快速反应小游戏
     *
     * @param type 0=按空格 1=按左右 3=按Alt 4=按↓ 8=按↑
     * @出自类 MovieEffectAPI
     */
inGameDirectionEvent_QTE(type: number){}
/**
     * 出现于希拉的剩余复活次数UI
     * @出自类 杂项API
     */
setFieldValue(key: String, value: String){}
/**
     * @出自类 ItemAPI
*/
haveSpace(type: number){}
/**
     * @出自类 MessageAPI
*/
topMsg(message: String){}
/**
     * @param path
     * @param value0 音量
     * @出自类 MovieEffectAPI
     */
fieldEffect_PlayBGM(path: String, value0: number){}
// ================================= 其他 =================================
updateEventProgress(percent: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenuNoESC_Illus(text: String, diffNPC: number){}
/**
     * 强制调用任务的结束脚本
     *
     * @param npc
     * @param quest 任务ID
     * @出自类 QuestAPI
     */
endQuestScript(npc: number, quest: number){}
/**
     * @出自类 WeddingAPI
*/
doRing(name: String, itemId: number){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_RemoveOverlapScreenDetail(value0: number){}
/**
     * 获得指定的BUFF，如果找不到技能BUFF就搜索道具BUFF
     * @出自类 SkillAPI
     */
gainSkillBuff(skill: number, level: number, newDuration: number){}
/**
     * 触发指定道具的脚本
     * @出自类 ItemAPI
     */
runItemScript(itemId: number){}
/**
     * @出自类 MovieEffectAPI
*/
inGameDirectionEvent_同时移动镜头和人(value0: number, value1: number, v2: number){}
/**
     * @出自类 PlayerAPI
*/
召唤机器人上线(){}
/**
     * 神之子发型
     *
     * @param 性别    男=0,女=1,通用=2
     * @param 男发型ID
     * @param 女发型ID
     * @出自类 PlayerAPI
     */
set神之子发型(性别: number, 男发型ID: number, 女发型ID: number){}
/**
     * @出自类 V172新复古API
*/
新复古_爬高高_倒计时(type: number, ms: number){}
/**
     * NPC动作重置
     *
     * @param npcTag
     * @出自类 NpcAPI
     */
setNpcSpecialActionReset(npcTag: String){}
/**
     * @出自类 PartyAPI
*/
party_CheckFailed_Level(min: number, max: number){}
/**
     * 智能AI说话
     *
     * @param cid
     * @param msg
     * @出自类 PlayerAPI
     */
AIChat(cid: number, msg: String){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_每周获得联盟币排行榜(){}
/**
     * @出自类 ScriptMessageAPI
*/
askStartEndSNoESC(text: String){}
/**
     * @出自类 QuestAPI
*/
forceStartQuest(customData: String){}
/**
     * 特殊任务，要求等待一段时间
     *
     * @param quest
     * @出自类 QuestAPI
     */
waitForEvent(quest: number){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_随机获得道具(tier: number){}
/**
     * 在玩家当前地图发送全地图信息
     *
     * @param type    类型
     * @param message 信息
     * @see #playerMessage(int, String)
     * @出自类 MessageAPI
     */
mapMessage(type: number, message: String){}
/**
     * @出自类 杂项API
*/
每日任务_制作星星(){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getNpc(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextNoESC(text: String){}
/**
     * @出自类 PlayerAPI
*/
canChangeHairFace(hairId: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askYesNo_Illus_II(text: String, diffNPC: number, style: number, isLeft: number){}
/**
     * @出自类 凯梅尔兹航海API
*/
凯梅尔兹航海_更新航海状态_战斗倒计时(倒计时时间: number, 暗礁: number){}
/**
     * 给倾向能力添加经验值
     *
     * @param name 倾向名称，支持： "领导力", "感性", "洞察力", "意志", "手技", "魅力"
     * @param exp  经验值
     * @出自类 PlayerAPI
     */
addTrait(name: String, exp: number){}
/**
     * @出自类 ItemActionManager
*/
getItemName(){}
/**
     * @出自类 MovieEffectAPI
*/
effect_item_maker_success(str0: String){}
/**
     * @出自类 NPCConversationManager
*/
getIv(){}
/**
     * 刷物品
     *
     * @param id          物品
     * @param quantity    数量
     * @param randomStats 是否随机化属性
     * @param period      剩余时间，默认以天为单位
     * @param slots       ？？？
     * @出自类 ItemAPI
     */
gainItem(id: number, quantity: number, randomStats: number, period: number, slots: number){}
/**
     * 刷怪，指定血量魔量经验倍率
     *
     * @param mobId 怪物
     * @param quantity 数量
     * @param multipler 倍率
     * @param x
     * @param y
     * @出自类 MonsterAPI
     */
spawnMobMultipler(mobId: number, quantity: number, multipler: number, x: number, y: number){}
/**
     * 任务常用的日期格式，当前日期
     * 

     * 1 = yyyyMMdd
     * 

     * 2 = yyyyMM
     * 

     * 3 = yy/MM/dd
     * 

     * 4 = yyyy-MM-dd HH:mm:ss
     * 

     * 5 = yyyy年MM月dd日 HH时mm分ss秒
     * 

     * 6 = yyyyMMddHHmmss 20210727162450
     * 

     * 7 = yyMMddHHmmss
     * 

     * 8 = HH:mm:ss
     * 

     * 9 = 任务常用的日期格式，今天日期 210604
     * 

     *
     * @param type 类型
     * @return String
     * @出自类 ToolAPI
     */
getNowTimeString(type: number){}
/**
     * @出自类 冒险岛联盟API
*/
冒险岛联盟_猎龙初始化(){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getAPI(){return new AbstractPlayerInteraction() }
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Illus(text: String, diffNPC: number){}
/**
     * 获得指定任务的 Info 信息
     * @出自类 QuestAPI
     */
getInfoQuest(id: number){}
/**
     * 播放世界消息
     *
     * @param type    类型
     * @param message 消息
     * @see #playerMessage(int, String)
     * @出自类 MessageAPI
     */
worldMessage(type: number, message: String){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrevNoESC(text: String){}
/**
     * 显示指定UI，附带参数 用于点击专业技术村的制作NPC 修理和技术窗口
     *
     * @param type
     * @param npc
     * @出自类 UserInterfaceAPI
     */
openUIWithOption(type: number, npc: number){}
/**
     * @param sql       脚本
     * @param batchArgs 列表里每一个数组，对应SQL表中的一列
     * @出自类 SqlAPI
     */
batchUpdateSQL(sql: String, batchArgs: any){}
/**
     * 莫奈德风格的结算界面
     *
     * @param exp
     * @param gold
     * @param items
     * @出自类 莫奈德API
     */
monadEndingScene(exp: number, gold: number, items: any){}
/**
     * @出自类 ItemAPI
*/
getReqLevel(itemId: number){}
/**
     * 添加临时变量？
     * @出自类 杂项API
     */
setSessionValue(key: String, value: String){}
/**
     * 设置强制状态，新手剧情使用 
     * 

     * 力量 = 999 敏捷 =999 智力 = 999 运气 = 999 物理攻击力 = 255 命中值 = 999 回避值 = 999 速度 =
     * 140 跳跃 = 123
     * @出自类 MovieEffectAPI
     */
setForcedStat(){}
/**
     * @出自类 ScriptMessageAPI
*/
onScriptMessage_限时答题_纯文本_韩文(type: number, text: String, hint: String, time: number){}
/**
     * @出自类 PlayerAPI
*/
随机脸型(player: Character){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOkNoESC_Illus(text: String, diffNPC: number){}
/**
     * @出自类 MovieEffectAPI
*/
effect_Direction(data: String, value0: number, value1: number, value2: number){}
/**
     * 精英怪所需击杀量
     * @出自类 PlayerAPI
     */
getEliteMobCountdown(){}
/**
     * @出自类 V180深渊远征队API
*/
深渊远征队_获得队员(npcId: number){}
/**
     * 移除地图随机传送门
     *
     * @param op
     * @param type
     * @param map
     * @出自类 MapEffectAPI
     */
onRandomPortalRemoved(op: number, type: number, map: number){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Bottom(text: String, diffNPC: number){}
/**
     * @出自类 ItemAPI
*/
getFamiliarCard(quantity: number, maxGrade: number){}
/**
     * @出自类 AbstractPlayerInteraction
*/
getQuest(){}
/**
     * @出自类 QuestActionManager
*/
getQuest(){}
/**
     * 获取当前地图中怪物数量
     * @return 
     * @出自类 MonsterAPI
     */
getNumMonsters(){}
/**
     * @出自类 MovieEffectAPI
*/
fieldEffect_KinesisEXP(value0: number){}
/**
     * 查看玩家当前破攻值
     *
     * @return
     * @出自类 PlayerAPI
     */
getLimitBreak(){}
/**
     * @出自类 ReactorActionManager
*/
dropSingleItem(itemId: number){}
/**
     * 赏金猎人、火焰狼出场时的音效
     *
     * @param msg
     * @出自类 MovieEffectAPI
     */
eventEmergencySound(msg: String){}
/**
     * 获得当前系统时间
     *
     * @return
     * @出自类 ToolAPI
     */
getCurrentTime(){}
/**
     * 给玩家团队所有人加经验，受倍率加成
     *
     * @param amount 经验
     * @出自类 PartyAPI
     */
givePartyExp(amount: number){}
/**
     * 设置转生次数
     * @出自类 修仙API
     */
setRepairquency(number: number){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextPrev(text: String, diffNPC: number){}
/**
     * 显示上海任务榜单
     * @出自类 主题副本API
     */
上海_显示任务榜单(){}
/**
     * @出自类 PlayerAPI
*/
获取服务器所有在线玩家(){}
/**
     * DIY缩放人物
     *
     * @param size 大小 10-1000
     * @param time 持续时间
     * @return
     * @出自类 SkillAPI
     */
resizeCharacterBuff(size: number, time: number){}
/**
     * 结束脚本对话
     * @出自类 ItemActionManager
     */
dispose(){}
/**
     * @出自类 NPCConversationManager
*/
dispose(){}
/**
     * @出自类 QuestActionManager
*/
dispose(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendOk(text: String, diffNPC: number){}
/**
     * 增加玩家日志的次数记录
     *
     * @param name  日志名称
     * @param type  0=永久 other=记录保存时间
     * @param count 次数
     * @出自类 EventAPI
     */
addPlayerLog(name: String, type: number, count: number){}
/**
     * @出自类 MapAPI
*/
scheduleWarpTask(time: number, to: number, portal: number){}
/**
     * 设置地图背景效果
     *
     * @param str
     * @param value
     * @出自类 MapEffectAPI
     */
setSpineBackEffect(str: any, value: any){}
/**
     * @出自类 ToolAPI
*/
randInt(arg0: number){}
/**
     * @出自类 CashAPI
*/
addHyPay(hypay: number, b: number){}
/**
     * @出自类 PartyAPI
*/
getPartyMembers(){}
/**
     * @出自类 PlayerAPI
*/
setVPoints(vpoints: number){}
/**
     * 增加账号日志的次数记录，默认+1
     *
     * @param name 日志名称
     * @param type 0=永久 other=记录保存时间
     * @出自类 EventAPI
     */
addAccountLog(name: String, type: number){}
/**
     * 道具信息是否存在
     * @出自类 ItemAPI
     */
itemExists(itemId: number){}
/**
     * 特效包save
     *
     * @param path
     * @出自类 MovieEffectAPI
     */
fieldEffect_SaveEff(path: String){}
/**
     * @出自类 JobAPI
*/
isBeginnerJob(){}
/**
     * @出自类 SkillAPI
*/
getSkillMenu(skillMaster: number, job: number){}
//【上一步】
sendPrev(text: String){}
/**
     * 获得在线时间
     * @出自类 PlayerAPI
     */
gainGamePoints(amount: number){}
/**
     * 当前道具脚本对应的道具ID
     * @出自类 ItemActionManager
     */
getItemId(){}
/**
     * @出自类 ScriptMessageAPI
*/
sendNextS(text: String){}
/**
     * @出自类 ScriptMessageAPI
*/
askMenu_Bottom(text: String){}
}
// 适用于普通脚本
var cm = new AbstractPlayerInteraction();
// 适用于所有脚本
var em = new EventManager();
var map = new MapleMap();
// 适用于事件脚本
var player = new Character();
