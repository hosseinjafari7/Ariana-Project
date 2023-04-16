import React, { useContext, useReducer, useEffect } from "react"
import { actionTypes, initState, reducer } from "./reducer"
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage"
import { v4 as uuidv4 } from "uuid";


const PeopleDataStateContext = React.createContext()
const PeopleDataDispatchContext = React.createContext()

export function usePeopleDataState() {
    const context = useContext(PeopleDataStateContext)
    if (!context) {
        throw Error("usePeopleDataState must be used with a peopleDataProvider")
    }
    return context
}

export function usePeopleDataDispatch() {
    const context = useContext(PeopleDataDispatchContext)
    if (!context) {
        throw Error("usePeopleDataDispatch must be used with a peopleDataProvider")
    }
    return context
}

export default function PeopleDataProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        let localStoragePeopleData = getLocalStorage("peopleData") ?? []
        dispatch({
            type: actionTypes.ADD_PEOPLE_DATA,
            payload: {
                peopleData: localStoragePeopleData
            }
        }
        )
    }, [])

    function addPeopleData(firstName, lastName, age, ability) {
        let data = {
            firstName: firstName,
            lastName: lastName,
            age: parseInt(age),
            ability: ability,
            id: uuidv4()
        }
        let oldData = state.peopleData
        let newData = [...oldData, data]
        dispatch({
            type: actionTypes.ADD_PEOPLE_DATA,
            payload: {
                peopleData: newData
            }
        })
        setLocalStorage("peopleData", newData)
    }

    function deletePeopleData(peopleDataId) {
        dispatch({
            type: actionTypes.DELETE_PEOPLE_DATA,
            payload: {
                peopleDataId
            }
        })
    }

    return (
        <PeopleDataStateContext.Provider value={state}>
            <PeopleDataDispatchContext.Provider value={{ addPeopleData,deletePeopleData, dispatch }}>
                {children}
            </PeopleDataDispatchContext.Provider>
        </PeopleDataStateContext.Provider>
    )
}