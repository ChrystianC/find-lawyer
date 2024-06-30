import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";


const baseUrl = process.env.LIBRA_URL
  ? `https://${process.env.LIBRA_URL}`
  : "http://localhost:3000/app/ui/images/libra.png";

export default function Email({ userFirstname = "Test user", date }) {
  return (
    <Html>
      <Head />
      <Preview>
        Laywer
      </Preview>
      <Body className="bg-white font-sans">
        <Container className="p-5">
          <Section style={btnContainer}>
            <Text>Laywer</Text>
            <Img
              src={baseUrl}
              width="170"
              height="50"

            />
          </Section>
          <Text className="text-lg leading-7 mt-5">Hi {userFirstname},</Text>
          <Text className="text-lg leading-7 mt-3">
            Welcome to Laywer, the law intelligence platform that helps you
            book a visit and find suitable lawer.
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href="#"
            >
              <Text className="text-center">
                {date ?? '00: 00 AM'}
              </Text>
            </Button>
          </Section>
          <Text className="text-lg leading-7 mt-5">
            Best,
            <br />
            The Laywer team
          </Text>
          <Hr className="border-gray-300 my-5" />
          <Text className="text-gray-500 text-sm">
            Moon 60
          </Text>
        </Container>
      </Body>
    </Html>
  );

}
const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "12px",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: '5px'
};
