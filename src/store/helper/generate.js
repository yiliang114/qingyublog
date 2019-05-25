/*
 * @Author: mrjzhang 
 * @Date: 2018-11-16 20:09:27 
 * @Last Modified by: mrjzhang
 * @Last Modified time: 2018-11-21 20:39:51
 */

/**
 * @param {*} key 
 */
export const setFuncName = (key) => `set${key.slice(0, 1).toUpperCase() + key.slice(1)}`
/**
 * generateGetters
 * info: { age: 20, friendship: [{ name: 'wang', age: 20}, ...]} } 可以直接通过 infoAge 以及 infoFriendshipName 来获取
 * 最多添加 2 层， 可以输入一个参数，不要深度遍历 
 * @param {*} state
 * @param {*} deep 是否需要深度遍历
 */
export const generateGetters = (state) => {
  const keys = state && Object.keys(state)
  if (!keys) return {}
  let getters = {}
  keys.forEach(key => {
    getters[key] = state => state[key]
  });
  return getters
}


export const generateMutations = (state) => {
  const keys = state && Object.keys(state)
  if (!keys) return {}
  let mutations = {}
  keys.forEach(key => {
    mutations[setFuncName(key)] = (state, value) => {
      if (value !== undefined) {
        state[key] = value
      }
    }
  });
  return mutations
}

export function makeAction(type) {
  return ({ commit }, ...args) => commit(type, ...args)
}