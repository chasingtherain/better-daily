import LoadingFormInput from "./LoadingFormInput"

export default function LoadingForm() {
    return <div className="flex flex-col justify-center items-center mb-20">
            {[...Array(4).keys()].map((i) => 
               <LoadingFormInput key={i}/>
            )}
        </div>
};
