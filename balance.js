
// 			ОПЫТ
//========================
var exp = {};
exp.curr = 0;		// опыт игрока
exp.base = 12;		// базовые опыт получаемый игроком за 1 игру
exp.percentage = 0.0005;		// процент от полученных очков конвертируемый в опыт
exp.param1 = 4;		// первое слагаемое в делителе экспоненты
exp.param2 = 10;		// на что делим уровень
exp.param3 = 5;		// до какого значения округляем


// 			БАЗОВЫЕ ПАРАМЕТРЫ (максимальный уровень, средний результат и т.д.)
//========================================================================================
var baseParameters = {};
baseParameters.maxLevel = 50;		// максимальный уровень игрока
baseParameters.gamesPerDay = 5;		// среднее к-во игр в день

// 																																				НЕ УЧИТЫВАЕТСЯ????????????????
baseParameters.softGameChange = [10, 20, 30, 40, 50]		// уровни на которых меняется ревард за игру

baseParameters.softGameBase = [50, 70, 90, 120, 150]		// базовое к-во валюты получаемое за игру в зависимости от уровня
baseParameters.softGamePercentage = 0.0003		// процент от очков за матч конвертируемый в валюту
baseParameters.points = 6000		// средний результат очков за игру

// var max_lvl = 50;		// максимальный уровень игрока
// var games_per_day = 5;		// среднее к-во игр в день
// var soft_game_lvl = [10, 20, 30, 40, 50]		// уровни на которых меняется ревард за игру
// var soft_game_base = [50, 70, 90, 120, 150]		// базовое к-во валюты получаемое за игру в зависимости от уровня
// var soft_game_percentage = 0.0003		// процент от очков за матч конвертируемый в валюту
// var points = 6000		// средний результат очков за игру

																																			// параметры для рассчёта уровней
// var curr_exp = 0;		// опыт игрока
// var exp_base = 12;		// базовые опыт получаемый игроком за 1 игру
// var exp_percentage = 0.0005;		// процент от полученных очков конвертируемый в опыт
// var exp_param_1 = 4;		// первое слагаемое в делителе экспоненты
// var exp_param_2 = 10;		// на что делим уровень
// var exp_param_3 = 5;		// до какого значения округляем

//		 ИГРУШКИ
//========================
var toy = {};
toy.pieceNeeded = 5;		// количество кусков в одной коллекции
toy.amount = [9, 8, 6];		// количество коллекций, обычные / редкие / эпичные.
toy.collectionAmount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];		// к-во коллекций на улучшение
toy.level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];		// уровни игрушек
toy.upgradeCost =	[[200,	1000,	2000,	4000,	6000,	10000,	15000,	20000,	30000,	40000],		// цена прокачки обычных игрушек
					[400,	2000,	4000,	6000,	10000,	15000,	20000,	30000,	40000,	50000],		// цена прокачки редких игрушек
					[600,	4000,	6000,	10000,	15000,	20000,	30000,	40000,	50000,	70000]];		// цена прокачки эпичных игрушек
toy.idealCost = [5, 40, 80];

// var toy_piece_needed = 5;		// количество кусков в одной коллекции
// var toy_count = [9,	8,	6];		// количество коллекций, обычные / редкие / эпичные.
// var toy_lvlup = [1,	1,	1,	1,	1,	1,	1,	1,	1,	1];		// к-во коллекций на улучшение
// var toy_lvl = [1,	2,	3,	4,	5,	6,	7,	8,	9,	10];		// уровни игрушек
// var toy_lvlup_cost =	[[200,	1000,	2000,	4000,	6000,	10000,	15000,	20000,	30000,	40000],		// цена прокачки обычных игрушек
// 						[400,	2000,	4000,	6000,	10000,	15000,	20000,	30000,	40000,	50000],		// цена прокачки редких игрушек
// 						[600,	4000,	6000,	10000,	15000,	20000,	30000,	40000,	50000,	70000]];		// цена прокачки эпичных игрушек
// var toy_ideal_cost = [5, 40, 80];

																																			// различные реварды получаемые игроком за выполнение чего-то
//		МАРАФОН
//========================
var maraphon = {};
maraphon.reward = 	[[1, 2, 3, 4, 5, 6, 7],		// номер дня
					['soft', 'instrument', 'instrument', 'soft', 'hard_small_chest', 'collection', 'mid_chest'],		// что выдаём в качестве реварда
					[500, 1, 1, 1000, 20, 1, 1]];		// гифты за ежедневный вход


// var daily_reward = 	[[1, 2, 3, 4, 5, 6, 7],
// 					['soft', 'instrument', 'instrument', 'soft', 'hard_small_chest', 'collection', 'mid_chest'],
// 					[500, 1, 1, 1000, 20, 1, 1]];		// эжедневные подарки

//	РЕВАРД ЗА ПОЛУЧЕНИЕ УРОВНЕЙ
//===============================
// var levelupGift = {};
// levelupGift.chestInterval = 2;
// levelupGift.chestChange = 20;
// levelupGift.softChange = 10;
// levelupGift.softBase = 200;
var levelup = {};
levelup.chestInterval = 2;		// через сколько лвлов даём ревард
levelup.chestChange = 20;		// через сколько лвлов заменяем тип сундука
levelup.rewardSoftChange = 10;		// параметр задающий через сколько уровней увеличивается ревард
levelup.rewardSoftBase = 200;		// базовый ревард который умножается на множитель зависящий от параметра
levelup.shareSoftChange = 10;		// параметр задающий через сколько уровней увеличивается ревард
levelup.shareSoftBase = 400;		// базовый ревард за шаринг получения уровней который домножается на множитель зависящий от параметра

// за уровни



// var lvl_chest_reward = 2;		// через сколько лвлов даём ревард
// var lvl_chest_reward_param = 20;		// через сколько лвлов заменяем тип сундука
// var lvl_soft_reward_param = 10;		// параметр задающий через сколько уровней увеличивается ревард
// var lvl_soft_reward_base = 200;		// базовый ревард который умножается на множитель зависящий от параметра
// var lvl_soft_share_param = 10;		// параметр задающий через сколько уровней увеличивается ревард
// var lvl_soft_share_base = 400;		// базовый ревард за шаринг получения уровней который домножается на множитель зависящий от параметра

//	ПОДАРКИ ПОЛУЧАЕМЫЕ В ИГРЕ
//===============================
var gift = {};
gift.chest = {};
gift.chest.chance =	[[5, 15, 25],		// уровни после которых меняется шанс
					[10, 20, 40]];		// вероятность в зависимости от уровня
gift.chest.loot =	[['instrument', 'collection', 'lifes'],
					[30, 60, 100],		// интервалы
					[1, 1, 5]];		// лут и его количество
gift.chest.instrument =	[['dart',	'color',	'star',	'time',	'power',	'bomb',	'chain_light',	'chain_light_power'],
						[20, 40, 70, 80, 90, 94, 98, 100]];		// шансы на разные инструменты
gift.chest.collection = [60, 90, 100];		// шансы на обычные, редкие и эпичные куски.

// var game_chest_chance =	[[5, 15, 25],		// уровни после которых меняется шанс
// 						[10, 20, 40]];		// вероятность в зависимости от уровня
// var game_chest_loot =	[['instrument', 'collection', 'lifes'],
// 						[30, 60, 100],		// интервалы
// 						[1, 1, 5]];		// лут и его количество
// var game_chest_instrument =	[['dart',	'color',	'star',	'time',	'power',	'bomb',	'chain_light',	'chain_light_power'],
// 							[20, 40, 70, 80, 90, 94, 98, 100]];		// шансы на разные инструменты
// var game_chest_collection =	[60, 90, 100];		// шансы на обычные, редкие и эпичные куски.

																																			// валюты
// var real_cost =	[[100, 350, 650, 1500, 3200, 8500],
// 				[0.99, 2.99, 4.99, 9.99, 19.99, 49.99]];		// стоимость покупки реала
// var soft_cost =	[[2500, 6250, 14000, 50000, 125000, 375000],
// 				[0.45, 0.99, 1.99, 6.49, 14.99, 39.99]];		// стоимость покупки софт валюты

																																			// инструменты
// var instrument_cost = 	[['name',			'soft',	'hard'],		// заголовок
// 						['dart',				200,	0],		// дротик
// 						['color',				400,	0],		// замена цвета
// 						['star',				600,	0],		// бумажная звезда
// 						['time',				0,		5],		// таймер
// 						['power',				0,		5],		// усилитель множителя
// 						['bomb',				0,		10],		// бомба
// 						['chain_light',			0,		10],		// цепная молния
// 						['chain_light_power',	0,		20]];		// усиленная цепная молния

//		ПОКУПКИ ВСЕГО
//============================
var bank = {};
bank.real =	[[100, 350, 650, 1500, 3200, 8500],
			[0.99, 2.99, 4.99, 9.99, 19.99, 49.99]];		// стоимость покупки реала
bank.soft =	[[2500, 6250, 14000, 50000, 125000, 375000],
			[0.45, 0.99, 1.99, 6.49, 14.99, 39.99]];		// стоимость покупки софт валюты
bank.instrument =	[['name',			'soft',	'hard'],		// заголовок
					['dart',				200,	0],		// дротик
					['color',				400,	0],		// замена цвета
					['star',				600,	0],		// бумажная звезда
					['time',				0,		5],		// таймер
					['power',				0,		5],		// усилитель множителя
					['bomb',				0,		10],		// бомба
					['chain_light',			0,		10],		// цепная молния
					['chain_light_power',	0,		20]];		// усиленная цепная молния
bank.chest =	[['chest_type', 'soft', 'hard'],
				['small',		1000,	0],
				['medium',		1000,	80],
				['large',		0,		300],
				['legendary',	0,		900]];		// стоимость различных сундуков


//			СУНДУКИ
//============================
var chest = {};
chest.types = ['small', 'medium', 'large', 'legendary'];		// типы сундуков
chest.loot = {};
chest.loot.toy =	[['chest_type', 'max_count'],
					['small',		3],
					['medium',		6],
					['large',		13],
					['legendary',	28]];		// общее к-во деталей в сундуке
chest.loot.min =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
					['small',		1,	1,	1,	200],
					['medium',		4,	1,	1,	300],
					['large',		6,	3,	1,	600],
					['legendary',	16,	3,	3,	1500]];		// минимальное содержимое сундуков
chest.loot.max =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
					['small',		1,	1,	1,	200],
					['medium',		6,	1,	1,	500],
					['large',		13,	5,	2,	1000],
					['legendary',	30,	5,	5,	2000]];		// максимальное содержимое сундуков

chest.loot.chance =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
					['small',		100,	10,		0,		100],
					['medium',		100,	40,		15,		100],
					['large',		100,	100,	50,		100],
					['legendary',	100,	100,	100,	100]];		// шансы на лут в разных сундуках

																									// НАДО ЗАПИЛИТЬ ПОДСЧЁТ РАЗНЫХ ИНСТРУМЕНТОВ ИЗ СУНДУКОВ! И ДОБАВИТЬ ИХ В РАСЧЁТ СТОИМОСТИ СУНДУКА

// НАДО БЫ ПРИВЕСТИ К ОДНОМУ ВИДУ С ДРУГИМИ ЛУТАМИ 
chest.loot.instrumentChance =	[['chest_type',	'dart',	'color',	'star',	'time',	'power',	'bomb',	'chain_light',	'chain_light_power'],		// названия
								['small',		20,	20,	30,	10,	10,	4,		4,		2],
								['medium',		15,	15,	20,	16,	16,	7,		7,		4],
								['large',		10,	10,	10,	22,	22,	10,		10,		6],
								['legendary',	5,	5,	5,	26,	26,	12.5,	12.5,	8],];		// вероятности выпадения различных инструментов из разных сундуков

chest.loot.instrumentAmount =	[['chest_type', 'inst_min', 'inst_max'],		// название
								['small',		1,	2],
								['medium',		1,	3],
								['large',		2,	4],
								['legendary',	4,	8]];		// количество выпадающих инструментов

																																			// сундуки
// var chests =	['small', 'medium', 'large', 'legendary'];		// типы сундуков

// var chest_cost =	[['chest_type', 'soft', 'hard'],
// 					['small',		1000,	0],
// 					['medium',		1000,	80],
// 					['large',		0,		300],
// 					['legendary',	0,		900]];		// стоимость различных сундуков

// var chest_loot_toys =	[['chest_type', 'max_count'],
// 						['small',		3],
// 						['medium',		6],
// 						['large',		13],
// 						['legendary',	28]];		// общее к-во деталей в сундуке

// var chest_loot_min =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
// 						['small',		1,	1,	1,	200],
// 						['medium',		4,	1,	1,	300],
// 						['large',		6,	3,	1,	600],
// 						['legendary',	16,	3,	3,	1500]];		// минимальное содержимое сундуков

// var chest_loot_max =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
// 						['small',		1,	1,	1,	200],
// 						['medium',		6,	1,	1,	500],
// 						['large',		13,	5,	2,	1000],
// 						['legendary',	30,	5,	5,	2000]];		// максимальное содержимое сундуков

// var chest_loot_chance =	[['chest_type', 'norm_toy', 'rare_toy', 'epic_toy', 'soft'],
// 						['small',		100,	10,		0,		100],
// 						['medium',		100,	40,		15,		100],
// 						['large',		100,	100,	50,		100],
// 						['legendary',	100,	100,	100,	100]];		// шансы на лут в разных сундуках


// функция для рассчёта среднего
function average (a, b) 
{
	return (a+b)/2
};

// функция для случайного в промежутке
function randBetween (min, max) 
{
	return Math.round( Math.random() * (max - min)) + min;
};

// Функция на шанс дропа
function lootChance (chance) 
{
	if (randBetween (0, 100) < chance) {
		return 1;
	} else {
		return 0;
	};
};



// Заполнение массива ревардов за получение и шаринг уровней
levelup.rewardMatrix = [];
levelup.shareMatrix = [];
for (var i = 0; i < baseParameters.maxLevel; i++) 
{
	levelup.rewardMatrix [i] = ( Math.ceil((i+2) / levelup.rewardSoftChange ) * levelup.rewardSoftBase);		// ревард за получение уровней в софт валюте
	levelup.shareMatrix [i] = ( Math.ceil((i+2) / levelup.shareSoftChange ) * levelup.shareSoftBase);		// ревард за шаринг полученных уровней в софт валюте
};


// заполнение массива требуемого опыта
// var exp_req = [];
// var exp_req_total = [];
// exp_req_total[0] = 0;
exp.required = [];
exp.requiredTotal = [];
exp.requiredTotal [0] = 0;
for (var i = 1; i <= baseParameters.maxLevel; i++) 
{
	exp.required [i] = Math.round( Math.exp((i) / (exp.param1 + (i) / exp.param2)) * exp.base/exp.param3) * exp.param3;		// количество опыта от прошлого уровня, необходимое для получения уровней
	exp.requiredTotal [i] = Math.round( Math.exp((i) / (exp.param1 + (i) / exp.param2)) * exp.base/exp.param3) * exp.param3 + exp.requiredTotal[i-1];		// общаее количетсов опыта для получения уровней
	console.log (i, exp.requiredTotal [i], exp.required [i]);
};

// Функция для подсчёта текущего уровня
function currentLevel (exp) 
{
	b = 0;
	while ( exp > exp.requiredTotal [b] ) {
		b = b + 1;
	};
	return ( b - 1 );
};
// подсчёт сколько нужно баксов для того чтобы иметь все детали
// [ строка ]		[ столбец ]																													ПОСМОТРЕТЬ РАБОТАЕТ ЛИ ТУТ ВСЁ ПРАВИЛЬНО
var a = 0;
var b = 0;
var c = 0;
var chest_count = [];
var purchase_price = [];
var chest_cost_dollar = [];
var toy_cost = [[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]];
var toy_cost_piece = [[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]];
for (var a = 0; a < 4; a++) 
{
	var collection_count = 0;
	// var chest_type = chest.types[i];
	if (a == 0) {
		// console.log ("chest_name", "	loot", "	someshit");
	};

	// подсчёт сколько нужно всего коллекций для прокачки игрушки
	for (var b = 0; b < toy.collectionAmount.length; b++) 
	{
		collection_count = collection_count + toy.collectionAmount[b];
	};

	// Подсчёт количества бабла необходимого для полного сбора разных игрушек из разных сундуков.
	for (var c = 0; c < toy.amount.length; c++) 
	{

		chest_count[c] = ( collection_count * toy.amount[c] * toy.pieceNeeded) / ( chest.loot.chance[a+1][c+1] * average ( chest.loot.min[a+1][c+1], chest.loot.max[a+1][c+1] ) / 100 );		// рассчёт сколько нужно сундуков на сбор деталей
		purchase_price[c] = (chest_count[c] * bank.chest[a+1][1] / bank.soft[0][2] * bank.soft[1][2]) + ( chest_count[c] * bank.chest[a+1][2] / bank.real[0][2] * bank.real[1][2] );		// рассчёт стоимости этих сундуков
		toy_cost [a] [c] = purchase_price [c] / toy.amount [c];		// рассчёт стоимости 1й игрушки
		toy_cost_piece [a] [c] = toy_cost [a] [c] / collection_count;		// рассчёт стоимости одной детали игрушки

	};
	// console.log (chest_count[0].toFixed(3), chest_count[1].toFixed(3), chest_count[2].toFixed(3));		// количество разных сундуков для сбора полного комплекта деталей
	// console.log (purchase_price[0].toFixed(3), purchase_price[1].toFixed(3), purchase_price[2].toFixed(3));		// стоимость покупки сундуков для сбора полного комплекта деталей
};


// Подсчёт стоимости содержимого сундуков																							ПОСМОТРЕТЬ РАБОТАЕТ ЛИ ТУТ ВСЁ ПРАВИЛЬНО
var a = 0;
var b = 0;
var c = 0;
var contained_items =	[[0, 0, 0, 0],
						[0, 0, 0, 0]];
for (var a = 0; a < chest.types.length; a++)		// количество сундуков
{
	for (var b = 0; b < toy.amount.length; b++) 
	{
		// подсчёт стоимости деталей от игрушек лежащих в сундуке
		
		contained_items [0] [a] = contained_items [0] [a] + chest.loot.min [a+1] [b+1] * toy_cost_piece [a] [b] * chest.loot.chance [a+1] [b+1] / 100;
		contained_items [1] [a] = contained_items [0] [a] + chest.loot.max [a+1] [b+1] * toy_cost_piece [a] [b] * chest.loot.chance [a+1] [b+1] / 100;
		console.log (contained_items [0] [a], contained_items [1] [a], a, toy.amount.length, b, chest.types.length);
	};
	// подсчёт стоимости валюты которая лежит в сундуке
	
	contained_items [0] [a] = contained_items [0] [a] + ( chest.loot.min [a+1] [4] * chest.loot.chance [a+1] [4] / 100 ) / bank.soft [0] [2] * bank.soft [1] [2];
	contained_items [1] [a] = contained_items [1] [a] + ( chest.loot.min [a+1] [4] * chest.loot.chance [a+1] [4] / 100 ) / bank.soft [0] [2] * bank.soft [1] [2];
	
};


// console.log ();
// console.log ();
// console.log ();


// рассчёт развития идеального игрока
var i = 1;
var b = 0;
var a = 0;
var c = 0;
exp.curr = 0;
var curr_lvl = 0;
var prev_lvl = 0;
var curr_soft = 1000;
var lvl_counter = 0;
var soft_for_games = 0;
var soft_for_lvl = 0;
var soft_for_share = 0;
var chest_lvl_count = 0;
var chest_lvl_count_prev = 0;
var norm_toy_piece = 0;
var rare_toy_piece = 0;
var epic_toy_piece = 0;
var toy_upgrade = [0, 0, 0];
var toy_piece = [0, 0, 0];
var soft_toy_upgrade = [0, 0, 0];
var toy_piece_left = [0, 0, 0];
var toy_upgrade_one = [0, 0, 0];
var daily_chest = [];
var daily_chest_count = 0;
var gift_collection = 0;
var	gift_instrument = 0;
var	gift_life = 0;
var result = {startIndex: -1, endIndex: -1};
var found = false;
var game_chest_instrument_collector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var game_chest_collection_collector = [0, 0, 0];
var soft_for_chest = [0, 0, 0, 0];

// console.log (toy_upgrade[0]);
// каунтер опыта игрока с учётом количества игр в день
while (exp.curr <= exp.requiredTotal [ exp.requiredTotal.length - 1 ] ) 
{
	// Подсчёт полученного опыта
	exp.curr = exp.curr + baseParameters.gamesPerDay * ( exp.base + exp.percentage * baseParameters.points );


	// подсчёт текущего уровня игрока
	curr_lvl = currentLevel (exp.curr);


	// смотрим нужно ли изменить ревард за игру
	if ( Math.floor( curr_lvl / levelup.rewardSoftChange ) == curr_lvl / levelup.rewardSoftChange ) {
		if ( Math.floor(( curr_lvl ) / levelup.rewardSoftChange ) != Math.floor( prev_lvl / levelup.rewardSoftChange )) {
			lvl_counter = lvl_counter + 1;
			// console.log (lvl_counter);
			// console.log ('ХХХХУУУУЕЕЕЕТТТТАААА!!!!');
		};
	};
	

	// подсчёт количества софта полученного игроком в качестве реварда за игры
	soft_for_games = baseParameters.gamesPerDay * baseParameters.softGameBase [lvl_counter] + baseParameters.softGamePercentage * baseParameters.points + soft_for_games;


	// подсчёт реварда за получение уровней и шаринг
	if ( curr_lvl != prev_lvl) {
		soft_for_lvl = soft_for_lvl + levelup.rewardMatrix[curr_lvl];
		soft_for_share = soft_for_share + levelup.shareMatrix[curr_lvl];
	};


	// Подсчёт по типу лута с подарков и количества жизней полученных (выпадают в игре)																		ДДДДООООДДДДЕЕЕЕЛЛЛЛААААТТТТЬЬЬЬ!!!!
	gift_collection = 0;
	gift_instrument = 0;
	gift_life = 0;
	a = 0;
	b = 0;
	for (var a = 0; a < baseParameters.gamesPerDay; a++) {
		b = randBetween( 0, 100 );
		if ( curr_lvl <= gift.chest.chance [0] [0] ) {
			if ( b < gift.chest.chance [1] [0] ) {
				b = randBetween( 0, 100 );
				if ( b < gift.chest.loot [1] [0] ) {
					gift_instrument = gift_instrument + 1;
					// console.log ('инструменты 1', i, a);
				} else {
					if ( b < gift.chest.loot [1] [1] ) {
						gift_collection = gift_collection + 1;
						// console.log ('коллекции 1', i, a);
					} else {
						gift_life = gift_life + 1;
						// console.log ('жизни 1', i, a);
					};
				};
			};
		} else {
			if ( curr_lvl <= gift.chest.chance [0] [1] ) {
				if ( b < gift.chest.chance [1] [1] ) {
					b = randBetween( 0, 100 );
					if ( b < gift.chest.loot [1] [0] ) {
						gift_instrument = gift_instrument + 1;
						// console.log ('инструменты 2', i, a);
					} else {
						if ( b < gift.chest.loot [1] [1] ) {
							gift_collection = gift_collection + 1;
							// console.log ('коллекции 2', i, a);
						} else {
							gift_life = gift_life + 1;
							// console.log ('жизни 2', i, a)
						};
					};				
				};
			} else {
				if ( b < gift.chest.chance [1] [2] ) {
					b = randBetween( 0, 100 );
					if ( b < gift.chest.loot [1] [0] ) {
						gift_instrument = gift_instrument + 1;
						// console.log ('инструменты 3', i, a);
					} else {
						if ( b < gift.chest.loot [1] [1] ) { 
							gift_collection = gift_collection + 1;
							// console.log ('коллекции 3', i, a);
						} else {
							gift_life = gift_life + 1;
							// console.log ('жизни 3', i, a);
						};
					};				
				};
			};
		};
	};


	// Подсчёт инструментов по типам
	a = 0;
	b = 0;
	c = 0;
	for (var a = 0; a < gift_instrument; a++) 
	{
		var b = randBetween( 0, 100 );
		for (var c = 0; c < gift.chest.instrument [1].length; c++)
		{
			if (b < gift.chest.instrument [1] [c]) {
				if (i == 0) result.startIndex = result.endIndex = 0;
				else {
					result.startIndex = c-1;
					result.endIndex = c;
					found = true;

					break;
				}
			}
		}

		if (!found) 
			result.endIndex = result.startIndex = gift.chest.instrument [1].length - 1;
			game_chest_instrument_collector [result.endIndex] = game_chest_instrument_collector [result.endIndex] + 1;

		// console.log(result.startIndex, result.endIndex, i, b, game_chest_instrument_collector [result.endIndex]);
	};


	// Подсчёт коллекций по типам
	a = 0;
	b = 0;
	c = 0;
	for (var a = 0; a < gift_collection; a++) 
	{
		var b = 10;
		for (var c = 0; c < gift.chest.collection.length; c++)
		{
			if (b < gift.chest.collection [c]) {
				if (i == 0) result.startIndex = result.endIndex = 0;
				else {
					result.startIndex = c-1;
					result.endIndex = c;
					found = true;

					break;
				}
			}
		}

		if (!found) 
			result.endIndex = result.startIndex = gift.chest.collection [0].length - 1;
			game_chest_collection_collector [result.endIndex] = game_chest_collection_collector [result.endIndex] + 1;		// Можно заменить на toy_piece []

		// console.log(result.startIndex, result.endIndex, i, b, game_chest_collection_collector [result.endIndex]);
	};


	// Подсчёт деталей из сундуков за ежедневный вход 
	// мелкий сундук на 5й день
	b = 0;
	if ( Math.floor( i / 5 ) == i / 5 ) { 
		for (var b = 0; b < 3; b++) 
		{
			c = randBetween( chest.loot.min [1] [b+1], chest.loot.max [1] [b+1]) * lootChance( chest.loot.chance [1] [b+1] );		// количество деталей полученных с сундуков
			toy_piece [b] = toy_piece [b] + c;
			toy_piece_left [b] = toy_piece_left [b] + c;
		};
	};


	// средний сундук на 7й день
	b = 0;
	if ( Math.floor( i / 7 ) == i / 7 ) { 
		for (var b = 0; b < 3; b++) 
		{
			c = randBetween( chest.loot.min [2] [b+1], chest.loot.max [2] [b+1] ) * lootChance( chest.loot.chance [2] [b+1] );		// количество деталей полученных с сундуков
			toy_piece [b] = toy_piece [b] + c;
			toy_piece_left [b] = toy_piece_left [b] + c;
		};
	};


	// подсчёт получения сундуков за уровни + лут в них + расчёт оставшихся деталей
	b = 0;
	c = 0;
	if ( curr_lvl != prev_lvl ) {																	// смотрим изменился ли уровень
		if ( Math.floor( curr_lvl / levelup.chestInterval ) == curr_lvl / levelup.chestInterval ) {			// смотрим нужный ли это уровень
			if ( curr_lvl - prev_lvl >= levelup.chestInterval ) {										// смотрим сколько сундуков выдать
				chest_lvl_count_prev = chest_lvl_count;
				chest_lvl_count = chest_lvl_count + Math.floor(( curr_lvl - prev_lvl ) / levelup.chestInterval );
				// console.log (Math.floor(( curr_lvl - prev_lvl ) / levelup.chestInterval ), chest_lvl_count);
				if (curr_lvl < levelup.chestChange) {
					// тут мелкий сундук
					// console.log ('small', curr_lvl);
					c = randBetween( chest.loot.min [1] [4], chest.loot.max [1] [4] );		// подсчёт софта с сундуков
					soft_for_chest [0] = soft_for_chest [0] + c;
					for (var b = 0; b < 3; b++) 
					{
						c = randBetween( chest.loot.min [1] [b+1], chest.loot.max [1] [b+1] ) * lootChance( chest.loot.chance [1] [b+1] ) * (chest_lvl_count - chest_lvl_count_prev);		// количество деталей полученных с сундуков
						toy_piece [b] = toy_piece [b] + c;
						toy_piece_left [b] = toy_piece_left [b] + c;
					};
					// console.log (toy_piece[0],toy_piece[1],toy_piece[2]);
				} else {
					// тут средний сундук
					// console.log ('medium', curr_lvl);
					c = randBetween( chest.loot.min [2] [4], chest.loot.max [2] [4] );		// подсчёт софта с сундуков
					soft_for_chest [1] = soft_for_chest [1] + c;
					for (var b = 0; b < 3; b++) 
					{
						c = randBetween( chest.loot.min [2] [b+1], chest.loot.max [2] [b+1] ) * lootChance( chest.loot.chance [2] [b+1] ) * (chest_lvl_count - chest_lvl_count_prev);		// количество деталей полученных с сундуков
						toy_piece [b] = toy_piece [b] + с;
						toy_piece_left [b] = toy_piece_left [b] + с;
					};
					// console.log (toy_piece[0],toy_piece[1],toy_piece[2]);
				};
			} else {
				chest_lvl_count_prev = chest_lvl_count;
				chest_lvl_count = chest_lvl_count + 1;
				// console.log (chest_lvl_count);
				if (curr_lvl < levelup.chestChange) {
					// тут мелкий сундук
					// console.log ('small', curr_lvl);
					c = randBetween( chest.loot.min [1] [4], chest.loot.max [1] [4] );		// подсчёт софта с сундуков
					soft_for_chest [0] = soft_for_chest [0] + c;
					for (var b = 0; b < 3; b++) 
					{
						c = randBetween( chest.loot.min [1] [b+1], chest.loot.max [1] [b+1] ) * lootChance( chest.loot.chance[1] [b+1] ) * (chest_lvl_count - chest_lvl_count_prev);		// количество деталей полученных с сундуков
						toy_piece [b] = toy_piece [b] + c;
						toy_piece_left [b] = toy_piece_left [b] + c;
					};
					// console.log (toy_piece[0],toy_piece[1],toy_piece[2]);
				} else {
					// тут средний сундук
					// console.log ('medium', curr_lvl);
					c = randBetween( chest.loot.min [2] [4], chest.loot.max [2] [4] );		// подсчёт софта с сундуков
					soft_for_chest [1] = soft_for_chest [1] + c;
					for (var b = 0; b < 3; b++) 
					{
						c = randBetween( chest.loot.min [2] [b+1], chest.loot.max [2] [b+1] ) * lootChance( chest.loot.chance [2] [b+1] ) * (chest_lvl_count - chest_lvl_count_prev);		// количество деталей полученных с сундуков
						toy_piece [b] = toy_piece [b] + c;
						toy_piece_left [b] = toy_piece_left [b] + c;
					};
					// console.log (toy_piece[0],toy_piece[1],toy_piece[2]);
				};
			};
		};
	};
	


	// Подсчёты улучшения
	a = 0;
	b = 0;
	// console.log(toy_upgrade[0]);
	for (var a = 0; a < 3; a++) 
	{
		if (toy_upgrade [a] < toy.amount [a] * 10) {
			if (toy_piece_left [a] > toy.amount [a] * toy.pieceNeeded / 2 ) {		// проверка хватает ли деталей для улучшения ДОБАВИТЬ ДЛЯ РАЗНОГО КОЛИЧЕСТВА НА УЛУЧШЕНИЯ
				toy_upgrade_one [a] = toy_upgrade [a];
				toy_upgrade [a] = toy_upgrade [a] + Math.floor( toy_piece_left [a] / ( toy.amount [a] * toy.pieceNeeded * toy.collectionAmount [ Math.ceil( Math.max( toy_upgrade[a], 1) / toy.amount[a] ) -1 ] / 2 ));		// увеличиваем каунтер количества грэйдов
				// console.log (toy_piece_left [a], toy.amount [a], toy.pieceNeeded , toy_upgrade[a] , toy.collectionAmount [Math.ceil( toy_upgrade[a] / ( toy.amount[a] )) ] / 2 );
				// На случай если будут случае когда есть сразу несколько улучшений
				if ( toy_upgrade [a] - toy_upgrade_one [a] > 1) {
					while (toy_upgrade_one[a] < toy_upgrade[a]) 
					{
						toy_piece_left [a] = toy_piece_left [a] - toy.pieceNeeded * toy.collectionAmount [ Math.ceil( Math.max( toy_upgrade_one[a], 1) / ( toy.amount[a] )) - 1];
						soft_toy_upgrade [a] = soft_toy_upgrade [a] + toy.upgradeCost [a] [ Math.ceil( Math.max( toy_upgrade_one[a], 1) / ( toy.amount[a] )) - 1];
						toy_upgrade_one [a] = toy_upgrade_one [a] + 1;
					};
				} else {
					toy_piece_left [a] = toy_piece_left [a] - toy.pieceNeeded * toy.collectionAmount [Math.ceil( Math.max( toy_upgrade[a], 1) / toy.amount[a] ) - 1];		// количество оставшихся кусков, с учётом разного к-ва коллекций на улучшения, если оно таки вернётся
					// console.log (i, toy_piece_left [a], toy_upgrade [a]);
					soft_toy_upgrade [a] = toy.upgradeCost [a] [Math.ceil( Math.max( toy_upgrade[a], 1) / ( toy.amount[a] )) - 1] + soft_toy_upgrade [a];		// сколько потрачено на улучшения по типу
					// console.log (i, toy_piece [a], toy_piece_left[a], soft_toy_upgrade[a]);
				};
			};
		} else {
			toy_upgrade [a] = 'Maximum';
			// console.log (i, toy_upgrade[a]);
		};
	};

	// console.log (i, exp.curr, curr_lvl, soft_for_games, soft_for_lvl, soft_for_share, chest_lvl_count, toy_piece [0], toy_piece [1], toy_piece [2], toy_upgrade[0], toy_upgrade[1], toy_upgrade[2], soft_toy_upgrade[0]+soft_toy_upgrade[1]+soft_toy_upgrade[2], soft_for_chest[0], soft_for_chest[1]);
	
	i = i + 1;			// обнуление и увеличение переменных
	b = 0;
	c = 0;
	prev_lvl = curr_lvl;
	a = 0;
};
