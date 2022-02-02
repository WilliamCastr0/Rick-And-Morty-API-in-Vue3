<template>
    <div class="pagination">
        <div class="item" @click="nextCharacters()">
            Prev
        </div>
        <div class="item" @click="previousCharacters()">
            Next
        </div>        
    </div>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character"/>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore  } from 'vuex';
import CardCharacter from './CardCharacter.vue'; 

export default {
    components: {
        CardCharacter
    },

    setup(){
        const store = useStore();

        const characters = computed( () => {
            return store.state.charactersFilter;
        });

        const nextCharacters = ( () => {
            store.dispatch('changeNextCharacters')
        } )
        
        const previousCharacters = ( () => {
            store.dispatch('changePreviousCharacters')
        } )        

        onMounted( () => {
            store.dispatch('getCharacters');
            }
        );

        return {
            characters,
            nextCharacters,
            previousCharacters
        }
    }
}
</script>

<style>
.pagination {
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    overflow: hidden;
}
.item {
    padding: 1rem 0.5rem;
    background-color: darkblue;
    text-align: center;
    cursor: pointer;
}
.item:hover {
    color: orangered;
}
</style>