import createGlobalState from 'react-create-global-state'
import {USER_KEY, INITIAL_STATE} from "../../constants"

const dataFromLocalStorage = getFromLocalStorage(USER_KEY)
const initialData = dataFromLocalStorage ? dataFromLocalStorage : INITIAL_STATE
const [_userGlobalUser, GlobalDataProvider] = createGlobalState(initialData)

function useGlobalUser(){
    const [globalUser, _setGlobalUser] = _userGlobalUser()

    function setGlobalUser(key, value){
        saveToLocalStorage(key, value, globalUser)
        _setGlobalUser(oldGlobalUser => {
            return {...oldGlobalUser, [key]:value}
        })
    }

    return[
        globalUser,
        setGlobalUser
    ]

}

function saveToLocalStorage(key, data, globalUser){
    const updateLocalStorage = {...globalUser, [key]: data}
    localStorage.setItem(USER_KEY, JSON.stringify(updateLocalStorage))
}

function getFromLocalStorage(key){
    const dataFound = localStorage.getItem(key)
    return JSON.parse(dataFound)
}

export {useGlobalUser, GlobalDataProvider}