const Retangulo = require("../retangulo");

test("Se as dimesões largura e altura forem maiores que 0, ela será verdadeira", () => {
  const retangulo_obj = Object.create(Retangulo)

  let largura = 10
  let altura = 5
  const dimensao = retangulo_obj.dimensoes(largura, altura)

  expect(dimensao).toBe(true)
})

test("Se as dimensões largura e altura recebe 0, ela sera falso", ()=>{
  const retangulo_obj = Object.create(Retangulo)
  
  let largura = 0 
  let altura = 0
  const dimensao = retangulo_obj.dimensoes(largura, altura)

  expect(dimensao).toBe(false)
})

test("O calculo da área estará correto se largura x altura = 50", () => {
  const retangulo_obj = Object.create(Retangulo)

  retangulo_obj.dimensoes(10, 5)

  const area = retangulo_obj.area()

  expect(area).toBe(50)
})

test("O calculo do perímetro será correto quando se largura + altura = 15 e ser multiplicado por 2 assim dando 30", () => {
  const retangulo_obj = Object.create(Retangulo)

  retangulo_obj.dimensoes(10, 5)

  const perimetro = retangulo_obj.perimetro()
  
  expect(perimetro).toBe(30)
})
