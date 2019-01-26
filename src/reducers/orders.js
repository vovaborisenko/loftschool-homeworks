import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const order = {
        id: action.payload.id,
        ingredients: [],
        position: 'clients',
        recipe: action.payload.recipe
      }

      return [ ...state, order ];
    case MOVE_ORDER_NEXT:
      return state.map(order => {
        if (order.id === action.payload) {
          switch (order.position) {
            case 'clients':
              return { ...order, position: 'conveyor_1' };
            case 'conveyor_1':
              return { ...order, position: 'conveyor_2' };
            case 'conveyor_2':
              return { ...order, position: 'conveyor_3' };
            case 'conveyor_3':
              return { ...order, position: 'conveyor_4' };
            case 'conveyor_4':
              const isEveryIngredientsPresent = order.recipe.every(i => 
                  order.ingredients.includes(i)
                );
              if (isEveryIngredientsPresent)
                return { ...order, position: 'finish' };
              else return order;
            default: 
              return order;
          }
        } else return order;
      });
    case MOVE_ORDER_BACK:
      return state.map(order => {
        if (order.id === action.payload) {
          switch (order.position) {
            case 'conveyor_4':
              return { ...order, position: 'conveyor_3' };
            case 'conveyor_3':
              return { ...order, position: 'conveyor_2' };
            case 'conveyor_2':
              return { ...order, position: 'conveyor_1' };
            default: 
              return order;
          }
        } else return order;
      });
    case ADD_INGREDIENT:
      return state.map(order => {
        if (order.position === action.payload.from) {
          return { ...order, ingredients: [ ...order.ingredients, action.payload.ingredient]}
        } else return order;
      });
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
