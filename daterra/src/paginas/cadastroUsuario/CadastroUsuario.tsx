import React, { useState, useEffect, ChangeEvent } from "react";
import './CadastroUsuario.css';
import { Box, Card, CardActionArea, CardContent, CardMedia, Radio } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../service/Service";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";


function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(

        {
            id: 0,
            nome: '',
            usuario: '',
            tipoUser: '',
            cep: '',
            cpnj: '',
            foto: '',
            senha: '',
            cpf: '',
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            tipoUser: '',
            cep: '',
            cpnj: '',
            foto: '',
            senha: '',
            cpf: '',
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
            tipoUser: selectedValue
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (selectedValue === 'cpf') {
            setUser({
                ...user,
                cpnj: '30645032000105'
            })
        } else {
            setUser({
                ...user,
                cpf: '05587887006'
            })
        }

        if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
                toast.success("Usuário cadastrado com sucesso!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "light",
                    progress: undefined,
                });
            } catch (error) {
                toast.error("Falha interna ao cadastrar", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "light",
                    progress: undefined,
                });
                console.log(error);
            }
        } else {
            toast.error("As senhas não conferem. Tente novamente.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                progress: undefined,
            });
            setUser({ ...user, senha: '' });
            setConfirmarSenha('');
        }
    }

    const [selectedValue, setSelectedValue] = React.useState('produtor');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    }

    return (
        <Grid className="cadastroUsuarioFundo">

            <Grid className='cadastroUsuariotela1'>
                <Typography variant='h3' component='h3' className='cadastroUsuarioTitulo1'>
                    Selecione o seu perfil:
                </Typography>

                <Card className='cadastroUsuarioTipoUser'>
                    <CardMedia
                        component="img"
                        height="140"
                        src="https://i.imgur.com/zoQy7wV.jpg"
                        alt="trabalhador rural segurando uma cesta com hortaliças"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className='cadastroUsuarioTextoTela1'>
                            Produtor
                        </Typography>
                        <Typography variant="body2" className='cadastroUsuarioTextoTela1'>
                            Sou um PRODUTOR e quero vender meus produtos nesta plataforma.
                        </Typography>
                        <Radio checked={selectedValue === 'produtor'} onChange={handleChange} value='produtor' name='radio-buttons' input-props={{ 'aria-label': 'PRODUTOR' }} />
                    </CardContent>
                </Card>

                <Card className='cadastroUsuarioTipoUser'>
                    <CardMedia
                        component="img"
                        height="140"
                        src="https://i.imgur.com/pLG26wm.jpg"
                        alt="refeitório empresarial"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className='cadastroUsuarioTextoTela1'>
                            Consumidor - Empresa
                        </Typography>
                        <Typography variant="body2" className='cadastroUsuarioTextoTela1'>
                            Sou uma EMPRESA e quero fornecer alimentos orgânicos para meus colaboradores.
                        </Typography>
                        <Radio checked={selectedValue === 'cpnj'} onChange={handleChange} value='cpnj' name='radio-buttons' input-props={{ 'aria-label': 'CPNJ' }} />
                    </CardContent>
                </Card>
                <Card className='cadastroUsuarioTipoUser'>
                    <CardMedia
                        component="img"
                        height="140"
                        src="https://i.imgur.com/miQ9Ulf.jpg"
                        alt="família cozinhando"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" className='cadastroUsuarioTextoTela1'>
                            Consumidor - Pessoa Física
                        </Typography>
                        <Typography variant="body2" className='cadastroUsuarioTextoTela1'>
                            Sou uma PESSOA FÍSICA e quero inserir produtos orgânicos na minha alimentação.
                        </Typography>
                        <Radio checked={selectedValue === 'cpf'} onChange={handleChange} value='cpf' name='radio-buttons' input-props={{ 'aria-label': 'CPF' }} />
                    </CardContent>
                </Card>
            </Grid>

            <Grid container className='cadastroUsuarioFormContainer'>
                <Grid item xs={6} className='cadastroUsuarioGrid2'>
                    <img src="https://i.imgur.com/GEsXPJF.jpg" className='cadastroUsuarioGrid2Imagem'alt="" />
                </Grid>
                <Grid item xs={6} className='cadastroUsuarioFormGrid'>
                    <Box>
                        <form onSubmit={onSubmit}>
                            <h2>Preencha seus dados para cadastro</h2>
                            <TextField className='cadastroUsuarioTextfield' value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" size="small" margin="dense"/>
                            <TextField className='cadastroUsuarioTextfield'value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário (e-mail)" variant="outlined" name="usuario"  size="small" margin="dense"/>
                            <TextField className='cadastroUsuarioTextfield' value={user.cep} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="cep" label="CEP" variant="outlined" name="cep"  size="small"margin="dense"/>
                            {selectedValue === 'cpf' ? (
                                <TextField className='cadastroUsuarioTextfield' value={user.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="cpf" label="CPF" variant="outlined" name="cpf"  size="small"margin="dense"/>)
                                : (<TextField className='cadastroUsuarioTextfield' value={user.cpnj} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="cpnj" label="CNPJ" variant="outlined" name="cpnj"  size="small"margin="dense"/>)}
                            {/* <TextField value={user.tipoUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="tipoUser" label="Tipo de Usuário" variant="outlined" name="tipoUser" /> */}
                            <TextField className='cadastroUsuarioTextfield' value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="URL da foto" variant="outlined" name="foto"  size="small" margin="dense"/>
                            <TextField className='cadastroUsuarioTextfield' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" type="password" placeholder='A senha deve conter no mínimo 7 caracteres' size="small"margin="dense"/>
                            <TextField className='cadastroUsuarioTextfield' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirmar senha" variant="outlined" name="confirmarSenhaha" type="password"  size="small" margin="dense"/>
                            <Box>
                                <Link to="/login" className="text-decorator-none">
                                    <Button variant="contained"className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button type='submit' variant="contained" className='CadastroUsuarioBotaoCadastrar'>
                                    Cadastrar
                                </Button>

                            </Box>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;