from abc import ABC, abstractmethod


class Customer:
    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone


class Address:
    def __init__(self, street: str, city: str, number: str, state: str) -> None:
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable(ABC):
    @abstractmethod
    def delivery(self, customer: Customer, address: Address) -> None:
        pass


class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(
            f"O pacote será enviado para {customer.name} no endereço {address.street} {address.number} {address.city} - {address.state}"
        )
        print(
            f"O cliente {customer.name} será notificado por SMS no número {customer.phone}"
        )


class ShippingCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(
            f"O pacote será enviado para {customer.name} no endereço {address.street} {address.number} {address.city} - {address.state}"
        )
        print(
            f"O cliente {customer.name} será notificado por telefone no numero:{customer.phone}"
        )


def main():
    customer = Customer("João", "999999999")
    address = Address("Rua 1", "São Paulo", "123", "SP")

    mail = Mail()
    mail.delivery(customer, address)

    shipping = ShippingCompany()
    shipping.delivery(customer, address)


if __name__ == "__main__":
    main()
