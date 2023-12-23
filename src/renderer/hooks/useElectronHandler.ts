import { useCallback, useEffect, useState } from 'react';

export const useElectronHandler = <K = undefined, T = undefined>(
    handler: (...args: T[]) => Promise<K>,
    withInit?: boolean,
    ...initArgs: T[]
) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();
    const [data, setData] = useState<K>();

    const call = useCallback(
        (...args: T[]) => {
            setLoading(true);

            handler(...args)
                .then((d) => setData(d))
                .catch((e) => setError(e))
                .finally(() => setLoading(false));
        },
        [handler]
    );

    useEffect(() => {
        if (withInit) call(...initArgs);
    }, []);

    return { call, data, isLoading, error };
};
