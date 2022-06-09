import React from 'react';
import { HightLightCard } from '../../components/HightLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard/'
import { LogoutButon, Transactions, Title, HightLightCards, Container, UserWrapper, Header, UserInfo, Photo, User, UserGreeting, UserName, Icon, TransactionList } from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DataListProps[] = [{
        id: '1',
        type: 'positive',
        title: "Desenvolvimento site",
        amount: "R$ 1.000,00",
        category: {
            name: 'vendas',
            icon: 'dollar-sign',
        },
        date: "01/01/2020"
    },
    {
        id: '2',
        type: 'negative',
        title: "Compras Mercado",
        amount: "R$ 1.000,00",
        category: {
            name: 'Supermecado',
            icon: 'shopping-bag'
        },
        date: "01/01/2020"
    },
    {
        id: '3',
        type: 'negative',
        title: "Mc Donalds",
        amount: "R$ 60,00",
        category: {
            name: 'Lanches',
            icon: 'shopping-bag',
        },
        date: "01/01/2020"
    }

    ]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/37459381?v=4' }} />
                        <User>
                            <UserGreeting>Olá</UserGreeting>
                            <UserName>Ismael</UserName>
                        </User>
                    </UserInfo>
                    <LogoutButon  >
                        <Icon name="power" />
                    </LogoutButon>
                </UserWrapper>
            </Header>
            <HightLightCards >
                <HightLightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.000,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HightLightCard
                    type="down"
                    title="Saidas"
                    amount="R$ 1.000,00"
                    lastTransaction="Última Saida dia 12 de abril"
                />
                <HightLightCard
                    type="total"
                    title="Total"
                    amount="R$ 19.000,00"
                    lastTransaction="01 a 10 de abril"
                />

            </HightLightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />

            </Transactions>
        </Container>
    )
}

