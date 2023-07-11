export default function BigImage({ bigImgId, bigImgSrc }) {


    return (
        <>
            <img
                src={bigImgSrc}
                style={{ width: "1300px", height: "600px", margin: "50px", borderRadius: "10px", boxShadow: "10px 10px " }}
                id={bigImgId} />


        </>
    )


}