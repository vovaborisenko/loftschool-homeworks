import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK, moveOrderNext } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  const positions = ['clients', 'conveyor_1', 'conveyor_2', 'conveyor_3', 'conveyor_4', 'finish'];
  let currentOrder, //верхний заказ в контейнере
    anotherOrders, // остальные заказы, кроме currentOrder
    indexOfPosition; // индекс в массиве positions 
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const order = {
        id: action.payload.id,
        ingredients: [],
        position: 'clients',
        recipe: action.payload.recipe
      }

      return state.concat(order);
    case MOVE_ORDER_NEXT:
      [currentOrder] = state.filter(order => order.id === action.payload);      
      anotherOrders = state.filter(order => order.id !== action.payload);
      indexOfPosition = positions.indexOf(currentOrder.position);
      if (positions[indexOfPosition + 1] !== 'finish') {
        currentOrder.position = positions[indexOfPosition + 1];
      } else if (currentOrder.recipe.length === currentOrder.ingredients.length) {
        currentOrder.position = positions[indexOfPosition + 1];
      }

      return [...anotherOrders, currentOrder];
    case MOVE_ORDER_BACK:
      [currentOrder] = state.filter(order => order.id === action.payload);      
      anotherOrders = state.filter(order => order.id !== action.payload);    
      indexOfPosition = positions.indexOf(currentOrder.position);
      if (positions[indexOfPosition - 1] !== 'clients') {
        currentOrder.position = positions[indexOfPosition - 1];
      }

      return [...anotherOrders, currentOrder];
    case ADD_INGREDIENT:
      [currentOrder] = state.filter(order => order.position === action.payload.from);
      anotherOrders = state.filter(order => order.position !== action.payload.from);
      if (currentOrder.position === action.payload.from
        && currentOrder.recipe.includes(action.payload.ingredient)
        && !currentOrder.ingredients.includes(action.payload.ingredient)) {
          currentOrder.ingredients.push(action.payload.ingredient)
      }

      return [...anotherOrders, currentOrder];
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
