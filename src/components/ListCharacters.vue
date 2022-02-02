<template>
    <div class="pagination">
        <div class="item" @click="nextCharacters()">
            Next
        </div>
        <div class="item" @click="previousCharacters()">
            Previous
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
            store.dispatch('changeNextCharacters');
            
        } )
        
        const previousCharacters = ( () => {
            store.dispatch('changePreviousCharacters');
        } )        

        onMounted( () => {
            store.dispatch('getCharacters');
            }
        );

        return {
            characters,
            nextCharacters,
            previousCharacters,
        }
    }
}
</script>

<style>
.characters {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem 0;
}
.pagination {
    width: 200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    overflow: hidden;
}
.item {
    padding: 1rem 0.5rem;
    background-color: #3C3E44;
    text-align: center;
    cursor: pointer;
}
.item:hover {
    color: orangered;
}
</style>