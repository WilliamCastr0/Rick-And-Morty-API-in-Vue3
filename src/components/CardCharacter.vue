<template>
    <div class="character">
        <img :src="character.image" alt="character.name">
        <div class="character__info">
            <b>{{ character.name }}</b>
        </div>
        <div class="specie">
            <span>
                Specie:
                {{ character.species }}
            </span>
        </div>        
        <div class="origin">
            <span>
                Origin:
                {{ character.origin.name }}
            </span>
        </div>
        <div class="location">
            <span>
                Location:
                {{ character.location.name }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character']

}
</script>

<style>
.character {
    background-color: #3C3E44;
    border-radius: 20px;
    box-shadow: 0 0 10px 1px #24282F;
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;
}
.character:hover {
    transform: scale(1.05);
    color: orangered;
}

h3 {
    color: orangered;
    margin-bottom: 0.5rem;
}

span {
    color: gray;
}
span:nth-child(1) {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 0.5rem;
}
.character__info {
    text-align: center;
    padding: 0.5rem;
    
    
}

.specie {
    text-align: left;
    padding: 0;
    
}

.origin {
    text-align: left;
    padding: 0;
    
}

.location {
    text-align: left;
    padding: 0;
    
}


</style>