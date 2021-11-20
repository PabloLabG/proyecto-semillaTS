export const holaMundo = () => {
  const _hoy = new Date().toLocaleDateString();
  const _env = process.env.ENVIROMENT_BASE;

  return `(${_env}) Hola Mundo Limonero ${_hoy}`;
};

export const a: number = 5;
