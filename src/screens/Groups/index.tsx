import { Header } from '@components/Header';
import { Container } from './styles';
import Highlight from '@components/Highligth';
import { GroupCard } from '@components/GroupCard';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Rocketseat', 'Amigos']);
  return (
    <Container>
      <Header showBackButton />

      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
      />

      <Button
        title='Criar nova turma' 
      />
    </Container>
  );
}