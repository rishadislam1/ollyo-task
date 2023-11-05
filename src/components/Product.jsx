import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

const Product = ({ product, isChecked, setIsChecked }) => {
  const { id, image } = product;

  const {newId, status} = isChecked;
  const handleChecking = ()=>{
   

    (status===true && newId===id)?setIsChecked({status:false, newId:0}):setIsChecked({status:true, newId:id});
    
  }
  return (
    <>
      <div onClick={handleChecking} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div>
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 border border-gray-300"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        <div className="absolute inset-0 flex translate-x-[-90%] flex-col items-start justify-start  text-center transition-all duration-500 group-hover:translate-x-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">
            
            {
             
                (status===true && newId===id)?<BiCheckboxChecked/>: <BiCheckbox/>
            }
           </h1>
        </div>
      </div>
    </>
  );
};

export default Product;
