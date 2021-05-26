import { VFC } from 'react';
import { Icon, Item } from 'semantic-ui-react';

import Spinner from '../molecules/Spinner';
import { Character } from '../../data/characters';

type Props = {
    characters: Character[];
    isLoading?: boolean;
};

const CharactersList: VFC<Props> = ({ characters = [], isLoading = false }) => (
    <>
        {isLoading ? (
            <Spinner />
        ) : (
            <Icon.Group>
                {characters.map((character) => (
                    <Item key={character.id}>
                        <Icon name="user circle" size="huge" />
                        <Item.Content>
                            <Item.Header>{character.name}</Item.Header>
                            <Item.Meta>
                                {character.grade}
                                年生
                            </Item.Meta>
                            <Item.Meta>
                                {character.height ?? '???'}
                                cm
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                ))}
            </Icon.Group>
        )}
    </>
);

export default CharactersList;
