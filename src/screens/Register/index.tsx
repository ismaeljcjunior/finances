import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Container, Header, Title, Form, Fields, TransactionsType } from './styles'
import { Input } from "../../components/Forms/Input";
import { InputForm } from "../../components/Forms/InputForm";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from '../../components/CategorySelectButton'
import { CategorySelect } from '../CategorySelect'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
    name: string;
    amount: string
}
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number().typeError('informe um valor numerico').positive('o valor nao pode ser negativo').required('valor é obrigatorio')
})
export function Register() {

    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',

    })

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    function handleRegister(form: FormData) {
        if (!transactionType)
            return Alert.alert('Selecione o tipo da transação.')
        if (category.key === 'category')
            return Alert.alert('Selecione a categoria.')

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data);

    }

    function handleTransactionType(type: 'up' | 'down') {
        setTransactionType(type)
    }
    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true)
    }
    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
    }
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm
                            name="name"
                            control={control}
                            placeholder="Nome"
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name="amount"
                            control={control}
                            placeholder="Valor"
                            keyboardType="numeric"
                            error={errors.amount && errors.amount.message}

                        />
                        <TransactionsType>
                            <TransactionTypeButton
                                type="up"
                                title="Income"
                                onPress={() => handleTransactionType('up')}


                                isActive={transactionType === 'up'}
                            />
                            <TransactionTypeButton
                                type="down"
                                title="Outcome"
                                onPress={() => handleTransactionType('down')}
                                isActive={transactionType === 'down'}
                            />
                        </TransactionsType>
                        <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
                    </Fields>
                    <Button
                        title="Enviar"
                        onPress={()=>handleSubmit(handleRegister)}
                    />
                </Form>
                <Modal visible={categoryModalOpen} statusBarTranslucent={true}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}

