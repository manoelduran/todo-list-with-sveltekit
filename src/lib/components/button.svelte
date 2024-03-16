<script lang="ts">
     interface ButtonProps {
    onClick: () => void;
  }

  export let props: ButtonProps;
</script>

<button type="button" on:click={props.onClick}><slot></slot></button>