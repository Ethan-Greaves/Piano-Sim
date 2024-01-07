
interface KeyProps {
    note: string,
}

const Key = (props: KeyProps) => {
    return (
        <>
            <h1>{`Key note is: ${props.note}`}</h1>
        </>
    );
}
 
export default Key;