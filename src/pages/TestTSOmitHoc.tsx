import React from 'react'
import { compose } from 'redux'

export const TestTSOmitHoc:React.FC = () => {
    return (
        <div>
            <h1>TestTSOmitHoc</h1>
            <C1Container2 title="Hi all hoc!" />
        </div>
    )
}

function HOC1<WCPops extends { hiphop: number }>(WrappedComponent: React.FC<WCPops>) {
    return (props: Omit<WCPops, 'hiphop'>) => {
        return <WrappedComponent {...props as WCPops} hiphop={10} />
    }
}

function HOC2<WCPops extends { dance: number }>(WrappedComponent: React.FC<WCPops>) {
    return (props: Omit<WCPops, 'dance'>) => {
        return <WrappedComponent {...props as WCPops} dance={1001} />
    }
}

type C1PropsType = {
    title: string
    hiphop: number
    dance: number
}

const C1: React.FC<C1PropsType> = (props: C1PropsType) => {
    return <div>{ props.title } - {props.hiphop} - {props.dance}</div>
}

const C1Container = HOC1(C1);
const C1Container2 = HOC2(C1Container);

// const f1 = (a: number) => {
//     return 12;
// }

// const f2 = (b: number) => {
//     return 11;
// }

// let result = compose(f2, f1)(18)

// console.log(result);

// type FromHOC1PropsType = React.FC<Omit<C1PropsType, 'hiphop'>>
// type FromHOC1Type = React.FC<FromHOC1PropsType>
// type FromHOC2Type = React.FC<Omit<C1PropsType, 'dance'>>

// const Result2 = compose<FromHOC1Type, React.FC<C1PropsType>, FromHOC2Type>(HOC2, HOC1)(C1)
// console.log(Result2);