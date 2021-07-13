
Library help to secure component from accessing from IFrame.
It designed to solve Click-Jacking attack.

[![npm](https://img.shields.io/npm/v/react-iframe-guard)](https://www.npmjs.com/package/react-iframe-guard)

## Usage

Secure component which should not be accessed via iFrame.
Child components will be visible, only when website is opened as /a top level window.

```tsx
import IFrameGuard from 'react-iframe-guard'

class Auth extends React.Component {
  render() {
    return (
      <IFrameGuard>
        <AuthForm />
      </IFrameGuard>
    )
  }
}
```


## Props

- `rejectComponent` - component which will be displayed in iFrame
