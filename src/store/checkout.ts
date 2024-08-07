import { createStore } from 'vuex';

import { CheckoutProduct } from 'types/type';

export interface State {
  checkout: CheckoutProduct[];
}

export default createStore<State>({
  state: {
    checkout: [],
  },
  mutations: {
    addToCheckout(state, product: CheckoutProduct) {
      const existingProduct = state.checkout.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.count += product.count;
        existingProduct.amount -= product.count;
      } else {
        state.checkout.push({ ...product, amount: product.amount - product.count });
      }
    },
    updateCheckoutItemCount(state, { item, newCount }: { item: CheckoutProduct; newCount: number }) {
      const product = state.checkout.find((p) => p.id === item.id);

      if (!product) {
        // If the product is not found, we might want to handle this case or log an error.
        console.warn(`Product with id ${item.id} not found in checkout.`);
        return;
      }

      if (newCount === 0) {
        // Remove the item from the checkout if the new count is zero
        state.checkout = state.checkout.filter((p) => p.id !== item.id);
      } else {
        const countDifference = newCount - product.count;

        // Update the count and amount
        product.count = newCount;
        product.amount -= countDifference;
      }
    },
    removeFromCheckout(state, item: CheckoutProduct) {
      state.checkout = state.checkout.filter((p) => p.id !== item.id);
    },
  },
  actions: {
    addToCheckout({ commit }, product: CheckoutProduct) {
      commit('addToCheckout', product);
    },
    removeFromCheckout({ commit }, item: CheckoutProduct) {
      commit('removeFromCheckout', item);
    },
  },
  getters: {
    totalPrice(state) {
      return state.checkout.reduce((total, product) => total + product.price * product.count, 0);
    },
    checkoutData(state) {
      return state.checkout;
    },
  },
});
