
//========================
var building = {};
building.level = [1, 3, 4, 6, 8];		// уровни на которых открываются здания с известной стоимостью
building.buyCost = [50, 63, 80, 143, 290];		// известные стоимости покупки
building.unknownLevel = [5, 7];		// уровень, стоимость зданий на котором неизвестна
building.unknownCost = [0, 0];		// запишем полученную стоимость

var form = {};
form.a = 2;		// на что делим уровень
form.aDelta = 0.1		// дельта которую будем прибавлять если B не равыны
form.b = [0, 0, 0, 0, 0];		// какие b получаются
form.bDifference = [0, 0, 0, 0, 0];		// для записи разницы между B

var accuracy = 1;		// насколько точно должны совпадать B

// функция для рассчёта среднего
function average (a, b, c, d) 
{
	return (a+b+c+d)/4
};


i = 1;
a = 0;

while (  )

for (var i = 0; i <= building.level.length - 1; i--) 
{
	form.b [i] = building.buyCost[i] / Math.exp( building.level[i] / form.a );		// рассчёт коэффициента B
	console.log (form.b[i]);		
};

form.bAverage = average (form.b[1], form.b[2], form.b[3], form.b[4]);		// рассчёт среднего B


for (var i = 1; i <= building.level.length - 1; i--) 
{
	form.bDifference [i] = form.b[i] - form.b[i+1];
	if ( Math.abs( form.bDifference [i] ) > accuracy ) 
	{
		counter = counter + 1;
	};
};

if (counter > 0) 
{
	form.a = form.a + form.aDelta;
};


for (var i = 0; i <= Things.length - 1; i--) {
	Things[i]
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



