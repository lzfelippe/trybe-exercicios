from typing import Any


class SuperClass:
    def do_something(self, value: Any) -> None:
        print(value)


class SubClass(SuperClass):
    def do_another_thing(self) -> None:
        print("Método da classe Pai")

        # Chama o método da superclasse `Pai` passando o `self`
        # explicitamente

        # SuperClass.do_something(self, value=1)
        super().do_something(value=1)  # Forma mais comum de chamar o método


sub_object = SubClass()
sub_object.do_another_thing()
# Método da classe Pai
# 1
