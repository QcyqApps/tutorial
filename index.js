// Zmienna gameItems zawiera w sobie obiekty itemów dostępnych w grze.
// Twoim zdaniem jest stworzenie funkcji która zliczy i zsumuje cenę wszystkich przedmiotów.
//
// Zadanie:
// 1. Zdeklaruj funkcję o nazwie GetGameItemsPrices.
// 2. W ciele funkcji stwórz zmienna (let) o nazwie totalItemsPrice o początkowej wartości = 0
// 3. Przeiteruj po tablicy gameItems pętlą for ()
// 4. Do wcześniej stworzonej zmiennej totalItemsPrice dodaj wartości "price" z każdego obiketu w iterowanej tablicy
// 5. Wywołaj funkcję a wynik końcowy wyprintuj do konsoli

const gameItems = [
    {
        "id": 1000,
        "type": "armor",
        "name": "Rags",
        "price": 3
    },
    {
        "id": 1001,
        "type": "armor",
        "name": "Peasant Clothes",
        "price": 38,
    },
    {
        "id": 1002,
        "type": "armor",
        "name": "Chain Vest",
        "price": 62,
    },
    {
        "id": 1003,
        "type": "armor",
        "name": "Leather Tunic",
        "price": 64,
    },
    {
        "id": 1004,
        "type": "armor",
        "name": "Robe",
        "price": 60,
    },
    {
        "id": 1005,
        "type": "armor",
        "name": "Thief Clothes",
        "price": 120,
    },
    {
        "id": 1006,
        "type": "armor",
        "name": "Scout Vestment",
        "price": 190,
    },
    {
        "id": 1007,
        "type": "armor",
        "name": "Archer Tunic",
        "price": 330,
    },
    {
        "id": 1008,
        "type": "armor",
        "name": "Hunter Light Armor",
        "price": 390,
    },
    {
        "id": 1009,
        "type": "armor",
        "name": "Alchemist Clothes",
        "price": 90,
    },
    {
        "id": 1010,
        "type": "armor",
        "name": "Magician Robe",
        "price": 288,
    },
    {
        "id": 1011,
        "type": "armor",
        "name": "Wizard Robe",
        "price": 550,
    }];