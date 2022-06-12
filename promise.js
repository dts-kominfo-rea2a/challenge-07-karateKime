const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(fgemosi) => {
  let xxi = await promiseTheaterIXX();
  let cgv = await promiseTheaterVGC();
  
  const gabung = xxi.concat(cgv);

  return gabung.filter(element => (element.hasil === fgemosi)).length;
}

;

module.exports = {
  promiseOutput,
};