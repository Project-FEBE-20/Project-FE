import Swal from "sweetalert2";

export function addCart(dispatch, state) {
  Swal.fire({
    title: "Sweet!",
    text: "Berhasil Masuk ke Keranjang",
    icon: "success",
    confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
  });
  console.log(state);
  return dispatch({
    type: "ADD_CART",
    addCart: state,
  });
}

export function delCart(dispatch, state) {
  Swal.fire({
    title: "Sweet!",
    text: "Data  berhasil dihapus",
    icon: "success",
    confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
  });
  console.log(state);
  return dispatch({
    type: "DEL_CART",
    delCart: state,
  });
}
export function delstate(dispatch, state) {
  console.log(dispatch, state);
  return dispatch({
    type: "DEL_STATE",
    delstate: state,
  });
}
