import { hash } from 'bcrypt';
import { sign, compare } from 'jsonwebtoken';
import { authenticate, ExpressReq } from './middlewares/auth';
import { PrismaClient } from '@prisma/client';

const cors = require( 'cors' );
const express = require( 'express' );
const app = express();

const prisma = new PrismaClient();

async function main ()
{
    await prisma.$connect();

    app.use( cors() );
    app.use( express.json() );

    app.use( cors( {
        origin: 'http://localhost:3000', // React app origin
        credentials: true,
    } ) );

    app.listen( 3555, () =>
    {
        console.info( 'Server running at http://localhost:3555' );
    } );
}

app.post( '/register', async ( req, res ) =>
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

app.post( '/login', async ( req, res ) =>
{
    try
    {
        const user = await prisma.user.findUnique( {
            where: {
                email: req.body.email
            }
        } );
        if ( !user )
        {
            throw new Error( 'user not found' );
        }
        const isPasswordCorrect = await compare( req.body.password, user.password );
        if ( !isPasswordCorrect )
        {
            throw new Error( 'Password is incorrect' );
        }

        const { password: _password, ...userWithoutPassword } = user;
        res.json( { userWithoutPassword, token: generateJwt( user ) } );
    } catch ( err )
    {
        res.json( { error: 'Email or passwrod are wrong!' } );
    }

} );

// app.get( '/user', async ( req, res) =>
// {
//     res.send( 'Hello World users page!' );

//     try
//     {
//         if ( !req.user )
//         {
//             return res.sendStatus( 401 );
//         }
//         const { password: _password, ...userWithoutPassword } = req.user;
//         res.json( { userWithoutPassword, token: generateJwt( req.user ) } );

//     } catch ( err )
//     {
//         next( err );
//     }
// } );


main()
    .catch( ( e ) =>
    {
        console.error( e );
        process.exit( 1 );
    } )
    .finally( async () =>
    {
        await prisma.$disconnect();
    } );