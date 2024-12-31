import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black"
    }))

    const StyledImg = styled("img")(() => ({
        width: "30¨%",
        borderRadius: "50%"
    }))


    return (
        <>
            <StyledHero>

                <Grid container spacing={2}>

                </Grid>

                <StyledImg src={Avatar} />
            </StyledHero>
        </>
    )
}

export default Hero
