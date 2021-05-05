import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding:2%;
    width:30%;
    border:5px solid black;
    margin-bottom:6%;
`
class FollowersData extends React.Component {
    render(){
        const { follower } = this.props;
        return(
            <Container key={follower.id}>
                <img 
                alt ="follower" 
                src={follower.avatar_url}
                height="320"
                />
                <h3>{follower.login}</h3>
                <a href={follower.html_url}>{follower.html_url}</a>
            </Container>
        )
    }
}

export default FollowersData;