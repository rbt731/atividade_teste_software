from app.retangulo import Retangulo

def test_dimensoes_true():
    retangulo = Retangulo()
    assert retangulo.definirDimensoes(11, 7) is True
    assert retangulo.largura == 11
    assert retangulo.altura == 7

def test_dimensoes_false():
    retangulo = Retangulo()
    assert retangulo.definirDimensoes(0,11) is False
    assert retangulo.definirDimensoes(7,0) is False
    assert retangulo.largura == 0
    assert retangulo.altura == 0

def test_calcular_area():
    retangulo = Retangulo()
    retangulo.definirDimensoes(11, 7)
    assert retangulo.calcularArea() == 77

def test_calcular_perimetro():
    retangulo = Retangulo()
    retangulo.definirDimensoes(11, 7)
    assert retangulo.calcularPerimetro() == 36