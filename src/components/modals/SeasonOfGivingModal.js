import React, {useState} from 'react'
import Modal from '../modals/Modal2'
import styled from 'styled-components'

const SeasonOfGivingModal = (props) => {
    const [loading, setLoading] = useState(false)
    
    // Close modal function
    const handleCloseModal = () => {
        props.closeModal()
        setError('')
        setLoading(false)
    }

    // Fake data of charities as a placeholder. 
    let charity = [
        {
            "name": "Better Yogurt of America",
            "description": "Yo, they be making gross yogurt in the U.S.A! Our charity is here to rectify this autrocity.",
            "img": "../../../../static/images/logo-with-tag-v2.png",
            "isSelected": false
        },
        {
            "name": "Yo Yo Ma",
            "description": "We help mother's in need!",
            "img": "../../../../static/images/logo-with-tag-v2.png",
            "isSelected": false
        },
        {
            "name": "Konami Code",
            "description": "Up, Up, Down, Down, Left, Right, Left, Right, B, A",
            "img": "../../../../static/images/logo-with-tag-v2.png",
            "isSelected": false
        }
    ]

    // Update this to be a tile for the charities
    function CharityTile  ()  {
        return(
            <React.Fragment>
                <CharityImage>
                    src={charity.image}
                </CharityImage>
                <CharityMeta>
                    <Title>{charity.title}</Title>
                    <Description>{charity.description}</Description>
                </CharityMeta>
            </React.Fragment>)
        }
    
    return (
        <Modal
            isOpen={active}
            closeModal={handleCloseModal}
            title="SeasonOfGiving"
            maxWidth="460px"
            width="550px"
        >
        <Container>
        <h1>AccuRadio Season of Sharing</h1>
        <p>Vote now for your favorite charity. If your vote is randomly selected from today's vote, we'll send the charity you selected $1,000!</p>
            <ContentContainer>
            {charity.map((charity, index) => {
                        return(
                        <React.Fragment key={index}>
                <CharityTile 
                    key={index}
                    index={index}
                    title={charity.name}
                    description={charity.description}
                    img={charity.img}
                />
                </React.Fragment>)})
            }
            </ContentContainer>
        </Container>

        </Modal>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        // add font size bigger and ect
        text-align: left;
        color: ${props => props.theme.colors.text}
    }

    p {
        text-align: left;
        color: ${props => props.theme.colors.text}
    }

    b {
        font-weight: bold;
    }
`

//Charity Image
const CharityImage = styled.img`
    background-color: #770d53;
    width: 100%;
    transition: opacity .2s ease-out;
    position: relative;
    opacity: 1;
    height: 105px;
    width: 150px;
`

// Charity Title
const Title = styled.p`
font-size: 16px;
color: ${props => props.theme.colors.text};
font-weight: 700;
padding: 3px 0;
letter-spacing: -.03em;
line-height: 1em;
margin: 0;
transition: color .2s ease-out;
max-width: 100%;
`
//Charity Description
const Description = styled.p`
    color: ${props => props.theme.colors.secondaryText};
    margin: 0px;
    font-size: 12px;
    line-height: 1.1;
    transition: color .2s ease-out;
    max-width: 100%;
`

export default (SeasonOfGivingModal)