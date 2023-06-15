import React from "react";
import { Text } from "@react-three/drei";

const TextSection = ({ title, subtitle, body, ...props }) => {

    return (
        <group {...props}>
            <Text
                color='white'
                anchorX={"left"}
                anchorY="bottom"
                fontSize={0.5}
                maxWidth={5}
                lineHeight={1}
            >
                {title}
            </Text>

            <Text
                color="#EEB462"
                anchorX={"left"}
                anchorY="top"
                fontSize={0.28}
                maxWidth={6}
            >
                {subtitle}
             
            </Text>
            <Text
                color='white'
                anchorX={"left"}
                anchorY="top-baseline"
                fontSize={0.25}
                maxWidth={5}
                position-y={-0.75}

            >
                {body}
            </Text>
        </group>
    );
};

export default TextSection