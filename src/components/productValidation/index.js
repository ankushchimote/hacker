// import React, {useState} from "react";
// import "./index.css";

// function ProductValidation () {
  

//   return (
//     <div className="layout-column justify-contents-center align-items-center">
//       <section className="card pa-50">
//         <form className="layout-column" noValidate>
//           <label>
//             <input
//               type="text"
//               onInput={null}
//               onBlur={null}
//               data-testid="name-input"
//               className={`white large outlined error`}
//               placeholder="Product name"
//             />
//             <p className="error-text form-hint" data-testid="name-input-error">
//             </p>
//           </label>
//           <label>
//             <input
//               type="number"
//               data-testid="quantity-input"
//               onInput={null}
//               onBlur={null}
//               className={`white large outlined error`}
//               placeholder="Quantity"
//             />
//             <p className="error-text form-hint" data-testid="quantity-input-error">
//             </p>
//           </label>
//           <button className="mt-50"  type="submit" data-testid="submit-button">
//             Submit  
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ProductValidation;




//maing changes

import React, {useState} from "react";
import "./index.css";

function ProductValidation () {
  const [text, setText] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);


  const handleTextChange = (e) => {
    setText(e.target.value);
    updateSubmitButtonState(e.target.value, quantity);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    updateSubmitButtonState(text, e.target.value);
  };

  const updateSubmitButtonState = (text, quantity) => {
    setIsDisabled(text === '' || quantity === '');
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  const textErrorMessage = document.getElementById("name-input-error");
    if (textErrorMessage) {
      if (text === '') {
        textErrorMessage.style.display = 'block';
      } else {
        textErrorMessage.style.display = 'none';
      }
    }

    const quantityErrorMessage = document.getElementById("quantity-input-error");
    if (quantityErrorMessage) {
      if (quantity === '') {
        quantityErrorMessage.style.display = 'block';
      } else {
        quantityErrorMessage.style.display = 'none';
      }
    }

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate onSubmit={handleSubmit}>
          <label>
            <input
              type="text"  //below 2 lines are added
              value={text}
              onChange={handleTextChange}
              onInput={null}
              onBlur={null}
              data-testid="name-input"
              className={`white large outlined error`}
              placeholder="Product name"
            />
            <p className="error-text form-hint" data-testid="name-input-error">
            </p>
          </label>
          <label>
            <input
              type="number"   //below 2 lines are added
              value={quantity} 
              onChange={handleQuantityChange} 
              data-testid="quantity-input"
              onInput={null}
              onBlur={null}
              className={`white large outlined error`}
              placeholder="Quantity"
            />
            <p className="error-text form-hint" data-testid="quantity-input-error">
            </p>
          </label>
          <button className="mt-50"  type="submit" disabled={isDisabled} data-testid="submit-button">
            Submit  
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;




