
import { PrismaClient } from '@prisma/client';

const cors = require( 'cors' );
const express = require( 'express' );
const app = express();

const prisma = new PrismaClient( {
    datasources: {
        db: {
            url: "postgresql://postgres:Lola5652.@localhost:5432/Lawyler?schema=public"
        }
    }
} );

app.use( express.json() );

app.use( cors( {
    origin: '*', // React app origin
    credentials: true,
} ) );

app.listen( 3555, () =>
{
    console.info( 'Server running at http://localhost:3555' );
} );


app.get( '/', ( req, res ) =>
{
    res.send( 'Hello World!' );
} );

app.post( '/register/user', async ( req, res ) =>
{
    try
    {
        const { password, userName, email } = req.body;
        const user = await prisma.user.create( {
            data: { userName: userName, email: email, password: password }
        } );
        res.json( { token: user } );
    } catch ( err )
    {
        res.json( { error: err } );
    }
} );

app.post( '/register/office', async ( req, res ) =>
{
    try
    {
        const { city, lawOfficeName, email, password, address, officeSpecialization } = req.body;
        const lawoffice = await prisma.lawOffice.create( {
            data: { lawOfficeName: lawOfficeName, email: email, city: city, password: password, address: address, officeSpecialization: officeSpecialization }
        } );
        res.json( { token: lawoffice } );
    } catch ( err )
    {
        res.json( { error: err } );
    }
} );

app.post( '/login/user', async ( req, res ) =>
{
    try
    {
        const user = await prisma.user.findUnique( {
            where: {
                email: req.body.email,
                password: req.body.password
            }
        } );
        if ( !user )
        {
            throw new Error( 'user not found' );
        }
        res.json( user.idUser );
    } catch ( err )
    {
        res.json( { error: err } );
    }

} );
app.post( '/login/office', async ( req, res ) =>
    {
        try
        {
            const office = await prisma.lawOffice.findUnique( {
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            } );
            if ( !office )
            {
                throw new Error( 'user not found' );
            }
            res.json( office.email);
        } catch ( err )
        {
            res.json( { error: err } );
        }
    
    } );
