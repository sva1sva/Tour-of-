export default function(state = null, action)
{
    switch(action.type)
    {
        case 'ARTISTS_LIST':
            return action.payload;
        default :
            return state;
    }
}